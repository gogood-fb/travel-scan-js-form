document.addEventListener('DOMContentLoaded', function () {
  const totalPointsPossible = 104;
  let earnedPoints = 0;

  const categories = {
    "Management & Information": [1, 2],
    "Caring for People": [3, 4, 5],
    "Good Employment": [6, 7, 8],
    "Caring for Climate": [9, 10, 11, 12, 13, 14],
    "Reducing Waste": [15, 16, 17, 18],
    "Caring for Water": [19, 20],
    "Reducing Pollution": [21, 22],
    "Food & Products": [23, 24],
    "Caring for Nature": [25],
    "Caring for Culture": [26],
  };

  let categoryScores = {};

  function toggleConditional(questionGroup) {
    const yesRadio = questionGroup.querySelector('input[type="radio"][value="yes"]');
    const conditionalSection = questionGroup.querySelector('.conditional');

    if (yesRadio && conditionalSection) {
      if (yesRadio.checked) {
        conditionalSection.style.display = 'block';
      } else {
        conditionalSection.style.display = 'none';
      }
    }
  }

  document.querySelectorAll('.question-group').forEach((questionGroup) => {
    const radioButtons = questionGroup.querySelectorAll('input[type="radio"]');

    radioButtons.forEach((radio) => {
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

    window.location.href = 'score.html';
  });
});
