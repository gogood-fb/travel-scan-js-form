document.addEventListener('DOMContentLoaded', function () {
  // Retrieve the country from localStorage and prefill the "Country" field
  const savedCountry = localStorage.getItem('countryName');
  if (savedCountry) {
    document.getElementById('country').value = savedCountry;
  }

  // Form submission logic
  document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Example validation (optional)
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!fullName || !email || !phone) {
      alert('Please fill in all required fields!');
      return;
    }

    // Redirect to the questionnaire page after successful submission
    window.location.href = '../Questionnaire&score/questionnaire.html';
  });
});
