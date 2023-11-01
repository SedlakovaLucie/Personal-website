//////////////////////////////////////NAVBAR

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

//////////////////////////////////////DARK/LIGHT MODE

const body = document.querySelector("body");
const lightMode = document.querySelector(".lightMode");
const darkMode = document.querySelector(".darkMode");

lightMode.addEventListener("click", () => {
  darkMode.style.display = "block";
  lightMode.style.display = "none";
  body.classList.add("darkMain");
});

darkMode.addEventListener("click", () => {
  lightMode.style.display = "block";
  darkMode.style.display = "none";
  body.classList.remove("darkMain");
});

//////////////////////////////////////ACCORDION

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    let plusSign = item.querySelector(".plus");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
      plusSign.textContent = "-";
    } else {
      description.style.height = "0px";
      plusSign.textContent = "+";
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let des = item2.querySelector(".description");
      let plusSign2 = item2.querySelector(".plus");
      des.style.height = "0px";
      plusSign2.textContent = "+";
    }
  });
}
