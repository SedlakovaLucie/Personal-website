const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const scrollButton = document.querySelector(".arrow");
const body = document.querySelector("body");
const lightMode = document.querySelector(".lightMode");
const darkMode = document.querySelector(".darkMode");
const accordionContent = document.querySelectorAll(".accordion-content");

//////////////////////////////////////NAVBAR

// otevření/zavření menu
const toggleMenu = () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("open");

  // scroll button
  if (scrollButton.classList.contains("open")) {
    scrollButton.classList.remove("open");
  } else {
    scrollButton.classList.add("open");
  }
};

hamburger.addEventListener("click", toggleMenu);

// plynulý scroll na sekci
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });

  // zavření menu do 800px
  if (window.innerWidth <= 800) {
    toggleMenu();
  }
};

// odkazy v menu
document.querySelectorAll(".menu-links a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute("href").substring(1);
    scrollToSection(sectionId);
  });
});

// zavření menu po kliknutí mimo něj do 800px
document.addEventListener("click", (event) => {
  if (window.innerWidth <= 800) {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      menu.classList.remove("show");
      hamburger.classList.remove("open");
      scrollButton.classList.remove("open");
    }
  }
});

// otevření menu nad 800px
if (window.innerWidth > 800) {
  toggleMenu();
}

//////////////////////////////////////SCROLL BUTTON

//zobrazení buttonu
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

//odebrání třídy open pod 800px
scrollButton.addEventListener("click", () => {
  if (window.innerWidth <= 800) {
    scrollButton.classList.remove("open");
  }

  // plynulý scroll nahoru
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//////////////////////////////////////DARK/LIGHT MODE

lightMode.addEventListener("click", () => {
  darkMode.style.display = "block";
  lightMode.style.display = "none";
  body.classList.add("dark");
});

darkMode.addEventListener("click", () => {
  lightMode.style.display = "block";
  darkMode.style.display = "none";
  body.classList.remove("dark");
});

//////////////////////////////////////ACCORDION

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

const removeOpen = (index1) => {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let des = item2.querySelector(".description");
      let plusSign2 = item2.querySelector(".plus");
      des.style.height = "0px";
      plusSign2.textContent = "+";
    }
  });
};
