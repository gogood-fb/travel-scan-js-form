document.addEventListener('DOMContentLoaded', function () {
  const totalPointsPossible = 104;
  let earnedPoints = 0;

  const destinationName = localStorage.getItem('destination-name') || 'Unknown Destination';
  const countryName = localStorage.getItem('country-name') || 'Unknown Country';

  // Define the categories and their respective question IDs
  const categories = {
    "Food & Products": [1, 2, 3],
    "Caring for People": [4, 5, 6],
    "Good Employment": [7, 8, 9],
    "Reducing Pollution": [10, 11],
    "Caring for Climate": [12, 13],
    "Reducing Waste": [14, 15],
    "Caring for Water": [16, 17],
    "Caring for Nature": [18, 19],
    "Caring for Culture": [20, 21],
    "Management & Info": [22, 23],
  };

  let categoryScores = {};

  function toggleConditional(questionGroup) {
    const yesRadio = questionGroup.querySelector('input[type="radio"][value="yes"]');
    const conditionalSection = questionGroup.querySelector('.conditional');

    if (yesRadio && conditionalSection) {
      conditionalSection.style.display = yesRadio.checked ? 'block' : 'none';
    }
  }

  document.querySelectorAll('.question-group').forEach((questionGroup) => {
    questionGroup.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.addEventListener('change', () => {
        toggleConditional(questionGroup);
        calculateScore();
      });
    });

    toggleConditional(questionGroup);
  });

  function calculateScore() {
    earnedPoints = 0;
    categoryScores = {};

    // Initialize category scores
    Object.keys(categories).forEach((category) => {
      categoryScores[category] = 0;
    });

    document.querySelectorAll('.question-group').forEach((questionGroup) => {
      const questionId = parseInt(questionGroup.id.split('-')[1]);

      const category = Object.keys(categories).find((cat) =>
        categories[cat].includes(questionId)
      );

      if (!category) return;

      const yesRadio = questionGroup.querySelector('input[type="radio"][value="yes"]');
      if (yesRadio && yesRadio.checked) {
        earnedPoints += 1;
        categoryScores[category] += 1;
      }

      questionGroup.querySelectorAll('.conditional input[type="checkbox"]:checked').forEach(() => {
        earnedPoints += 1;
        categoryScores[category] += 1;
      });

      questionGroup
        .querySelectorAll('.conditional input[type="radio"]:checked')
        .forEach((radio) => {
          const points = parseInt(radio.value) || 0;
          earnedPoints += points;
          categoryScores[category] += points;
        });
    });

    console.log('Earned Points:', earnedPoints);
    console.log('Category Scores:', categoryScores);
  }

  document.getElementById('travel-scan-form').addEventListener('submit', function (e) {
    e.preventDefault();
    calculateScore();

    sessionStorage.setItem('finalScore', Math.round((earnedPoints / totalPointsPossible) * 100));
    sessionStorage.setItem('categoryScores', JSON.stringify(categoryScores));
    sessionStorage.setItem('destination-name', destinationName);
    sessionStorage.setItem('country-name', countryName);

    window.location.href = 'score.html';
  });

  calculateScore();
});
