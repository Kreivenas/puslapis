// Keičiame kompanijos pavadinimą
// Keičiame kompanijos pavadinimą
const companyNameElement = document.getElementById('company-name');
companyNameElement.textContent = 'Žvakės';

const footerTextElement = document.getElementById('footer-text');
footerTextElement.textContent = 'Puslapį kūrė Tomas Kreivenas ';

const copyrightElement = document.getElementById('copyright');
const currentYear = new Date().getFullYear();
const copyrightText = `Visos Teisės Saugomos CodeAcademy &copy; ${currentYear}`;
copyrightElement.innerHTML = copyrightText;

function zoomIn(image) {
  image.classList.add('zoomed');
}

function zoomOut(image) {
  image.classList.remove('zoomed');
}
