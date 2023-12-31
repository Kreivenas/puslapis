// Keičiame kompanijos pavadinimą
const companyNameElement = document.getElementById('company-name');
companyNameElement.textContent = 'Žvakės';

const footerTextElement = document.getElementById('footer-text');
footerTextElement.textContent = 'Puslapį kūrė Tomas Kreivenas';

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

function combineImageAndDescription() {
  const imageWithDescriptions = document.querySelectorAll('.image-with-description');
  imageWithDescriptions.forEach(imageWithDescription => {
    const image = imageWithDescription.querySelector('img');
    const description = imageWithDescription.querySelector('.description');
    imageWithDescription.innerHTML = `<div class="image-container">${image.outerHTML}${description.outerHTML}</div>`;
  });
}

// Iškviečiame funkciją, kad aprašymai būtų apjungti su nuotraukomis
combineImageAndDescription();

function toggleMenu() {
  const mainMenu = document.getElementById("main-menu");
  const menuToggle = document.getElementById("menu-toggle");

  if (mainMenu.style.display === "block") {
    mainMenu.style.display = "none";
  } else {
    mainMenu.style.display = "block";
  }
}

// Uždaryti meniu, kai paspaudžiama bet kurioje vietoje, išskyrus meniu
document.addEventListener("click", function (event) {
  const mainMenu = document.getElementById("main-menu");
  const menuToggle = document.getElementById("menu-toggle");

  if (event.target !== mainMenu && event.target !== menuToggle) {
    mainMenu.style.display = "none";
  }
});
