const barMenu = document.querySelector(".bar-menu");
const navMenu = document.querySelector(".nav-menu");
const emailInput = document.querySelector(".email input");
const valid = document.querySelector(".valid");
const invalid = document.querySelector(".invalid");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const text = document.querySelector(".text");

///////RESPONSIVE MENU
barMenu.addEventListener("click", () => {
  barMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

///////EMAIL
const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

emailInput.addEventListener("input", () => {
  const email = emailInput.value;

  if (email.match(pattern)) {
    valid.style.display = "block";
    invalid.style.display = "none";
  } else {
    valid.style.display = "none";
    invalid.style.display = "block";
  }

  if (emailInput.value === "") {
    valid.style.display = "none";
    invalid.style.display = "none";
  }
});

///////PASSWORD
password2.addEventListener("input", () => {
  if (password1.value === password2.value) {
    text.textContent = "Vaše hesla se shodují";
    text.style.color = "green";
  } else {
    text.textContent = "Vaše hesla se NEshodují";
    text.style.color = "red";
  }
});

password1.addEventListener("input", () => {
  if (password1.value === "" && password2.value === "") {
    text.textContent = "";
  }
});
