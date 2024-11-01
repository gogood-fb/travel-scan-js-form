document.addEventListener('DOMContentLoaded', function () {
    const totalPointsPossible = 104;
    let earnedPoints = 0;

    // Function to toggle visibility of conditional sections
    function toggleConditional(selectElement, conditionalElement) {
        if (selectElement.value === 'yes') {
            conditionalElement.style.display = 'block';
        } else {
            conditionalElement.style.display = 'none';
        }
    }

    // Function to calculate score for yes/no questions, with an option for n/a
    function scoreYesNo(selectElement, yesPoints = 1) {
        if (selectElement.value === 'yes') {
            return yesPoints;
        } else if (selectElement.value === 'na') {
            return 0;
        } else {
            return 0;
        }
    }

    // Calculate the total score
    function calculateScore() {
        earnedPoints = 0;

        // Add points for each yes/no question
        earnedPoints += scoreYesNo(document.getElementById('question-1-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-2-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-3-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-4-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-5-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-6-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-7-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-8-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-9-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-10-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-11-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-12-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-13-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-14-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-15-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-16-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-17-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-18-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-19-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-20-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-21-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-22-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-23-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-24-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-25-select'), 1);
        earnedPoints += scoreYesNo(document.getElementById('question-26-select'), 1);

        // Add points from checked conditional checkboxes
        document.querySelectorAll('.conditional input[type="checkbox"]:checked').forEach(() => {
            earnedPoints += 1;
        });

        // Add points from selected conditional radio buttons
        document.querySelectorAll('.conditional input[type="radio"]:checked').forEach((radio) => {
            earnedPoints += parseInt(radio.value);
        });
    }

    // Show submit button after Question 26 is answered
    const question26Select = document.getElementById('question-26-select');
    const submitButton = document.getElementById('submit-button');

    question26Select.addEventListener('change', function () {
        if (question26Select.value !== "") {
            submitButton.style.display = 'block';
        } else {
            submitButton.style.display = 'none';
        }
    });

    // Add event listeners to toggle conditional sections for each question
    document.querySelectorAll('.question-group').forEach((questionGroup) => {
        const selectElement = questionGroup.querySelector('select');
        const conditionalElement = questionGroup.querySelector('.conditional');

        if (selectElement && conditionalElement) {
            selectElement.addEventListener('change', function () {
                toggleConditional(selectElement, conditionalElement);
                calculateScore();
            });
        }
    });

    // Handle form submission and display score
    const form = document.getElementById('travel-scan-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        calculateScore();

        // Round the score and store in sessionStorage
        const scorePercentage = Math.round((earnedPoints / totalPointsPossible) * 100);
        sessionStorage.setItem('finalScore', scorePercentage);

        // Redirect to score page
        window.location.href = 'score.html';
    });
});
