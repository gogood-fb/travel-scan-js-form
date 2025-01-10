document.getElementById('country-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const country = document.getElementById('country-input').value.trim();
  if (country) {
    localStorage.setItem('countryName', country); // Save the country to localStorage
    window.location.href = '../IntroductionPage/introducingGoodTravelScan.html'; // Redirect to introduction page
  }
});
