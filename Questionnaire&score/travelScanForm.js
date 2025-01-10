document.addEventListener('DOMContentLoaded', function () {
    const totalPointsPossible = 104;
    let earnedPoints = 0;

    // Retrieve saved data from localStorage on load
    const savedDestinationName = localStorage.getItem('destination-name') || '';
    const savedCountryName = localStorage.getItem('country-name') || '';
    document.getElementById('destination-name').value = savedDestinationName;
    document.getElementById('country-name').value = savedCountryName;

    // Save destination info when inputs change
    document.getElementById('destination-name').addEventListener('input', () => {
        localStorage.setItem('destination-name', document.getElementById('destination-name').value);
    });

    document.getElementById('country-name').addEventListener('input', () => {
        localStorage.setItem('country-name', document.getElementById('country-name').value);
    });

    // Function to toggle visibility of conditional sections
    function toggleConditional(selectElement, conditionalElement) {
        if (selectElement.value === 'yes') {
            conditionalElement.style.display = 'block';
        } else if (selectElement.value === 'no') {
            conditionalElement.style.display = 'none';
        }
    }

    // Add event listeners to toggle conditional sections
    document.querySelectorAll('.question-group').forEach((questionGroup) => {
        const yesNoInputs = questionGroup.querySelectorAll('input[type="radio"]');
        const conditionalElement = questionGroup.querySelector('.conditional');

        yesNoInputs.forEach(input => {
            input.addEventListener('change', function () {
                toggleConditional(input, conditionalElement);
                checkFormCompletion(); // Check if form completion conditions are met after each change
                calculateScore(); // Update score whenever a selection is made
            });
        });
    });

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
        for (let i = 1; i <= 26; i++) {
            const yesRadio = document.getElementById(`question-${i}-yes`);
            if (yesRadio && yesRadio.checked) {
                earnedPoints += scoreYesNo(yesRadio, 1);
            }
        }

        // Add points from checked conditional checkboxes
        document.querySelectorAll('.conditional input[type="checkbox"]:checked').forEach(() => {
            earnedPoints += 1;
        });

        // Add points from selected conditional radio buttons
        document.querySelectorAll('.conditional input[type="radio"]:checked').forEach((radio) => {
            earnedPoints += parseInt(radio.value);
        });
    }

    // Show submit button after all required questions (up to 26) are answered
    const submitButton = document.getElementById('submit-button');

    function checkFormCompletion() {
        let allAnswered = true;

        // Check if all required questions (up to 26) are answered
        for (let i = 1; i <= 26; i++) {
            const yesRadio = document.getElementById(`question-${i}-yes`);
            const noRadio = document.getElementById(`question-${i}-no`);

            if ((yesRadio && !yesRadio.checked) && (noRadio && !noRadio.checked)) {
                allAnswered = false;
                break;
            }
        }

        // Show the submit button if all required questions are answered
        if (allAnswered) {
            submitButton.style.display = 'block';
        } else {
            submitButton.style.display = 'none';
        }
    }

    // Attach change event listeners to each required question up to 26
    for (let i = 1; i <= 26; i++) {
        const yesRadio = document.getElementById(`question-${i}-yes`);
        const noRadio = document.getElementById(`question-${i}-no`);

        if (yesRadio && noRadio) {
            yesRadio.addEventListener('change', checkFormCompletion);
            noRadio.addEventListener('change', checkFormCompletion);
        }
    }

    // Existing code for form submission
    const form = document.getElementById('travel-scan-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        calculateScore();

        // Save overall score in sessionStorage
        const scorePercentage = Math.round((earnedPoints / totalPointsPossible) * 100);
        sessionStorage.setItem('finalScore', scorePercentage);

        // Save destination info for the scorecard display
        sessionStorage.setItem('destination-name', document.getElementById('destination-name').value);
        sessionStorage.setItem('country-name', document.getElementById('country-name').value);

        // Redirect to score page
        window.location.href = 'score.html';
    });
});
