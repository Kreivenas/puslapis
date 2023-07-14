// Keičiame kompanijos pavadinimą
// Keičiame kompanijos pavadinimą
const companyNameElement = document.getElementById('company-name');
companyNameElement.textContent = 'Žvakės';

function zoomIn(image) {
  image.classList.add('zoomed');
}

function zoomOut(image) {
  image.classList.remove('zoomed');
}
