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

    // Function to calculate score based on question response, handling N/A
    function scoreYesNo(selectElement, yesPoints = 1) {
        if (selectElement.value === 'yes') {
            return yesPoints;
        } else if (selectElement.value === 'na') {
            return 0; 
        } else {
            return 0;
        }
    }

    // Main function to calculate the total score
    function calculateScore() {
        earnedPoints = 0; // Reset earned points

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

        // Additional points for selected checkboxes and radio buttons in conditional sections
        document.querySelectorAll('.conditional input[type="checkbox"]:checked').forEach(() => {
            earnedPoints += 1;
        });

        document.querySelectorAll('.conditional input[type="radio"]:checked').forEach((radio) => {
            earnedPoints += parseInt(radio.value);
        });
    }

    // Event listeners for each question to toggle conditionals and calculate score
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

    // Handle form submission
    const form = document.getElementById('travel-scan-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); 
        calculateScore(); 

       // Round and store final score
        const scorePercentage = Math.round((earnedPoints / totalPointsPossible) * 100);
        sessionStorage.setItem('finalScore', scorePercentage);

        // Redirect to score page
        window.location.href = 'score.html';
    });
});
