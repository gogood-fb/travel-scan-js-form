document.addEventListener('DOMContentLoaded', function () {
  const savedCountry = localStorage.getItem('countryName');
  if (savedCountry) {
    document.getElementById('country').value = savedCountry;
  } else {
    alert('Please enter your country on the welcome page.');
    window.location.href = '../welcomePage/welcome.html';
  }

  document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!fullName || !email || !phone) {
      alert('Please fill in all required fields!');
      return;
    }

    window.location.href = '../Questionnaire&score/questionnaire.html';
  });
});
