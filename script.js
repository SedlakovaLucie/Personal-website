//NAVIGAČNÍ MENU

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("open");
});

// Přidat event listener pro zavření menu pouze při kliknutí na hamburger
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 800) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("show");
      hamburger.classList.remove("open");
    }
  }
});

// Funkce pro plynulý scroll na sekci
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });

  // Zavřít menu na mobilním zařízení
  if (window.innerWidth <= 800) {
    menu.classList.remove("show");
    hamburger.classList.remove("open");
  }
}

// Event listenery pro odkazy v menu
document.querySelectorAll(".menu-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute("href").substring(1);
    scrollToSection(sectionId);
  });
});

//Light/Dark mode
