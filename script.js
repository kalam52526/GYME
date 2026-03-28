const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  navToggle.querySelector("i").classList.toggle("fa-bars");
  navToggle.querySelector("i").classList.toggle("fa-times");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
      navToggle.querySelector("i").classList.remove("fa-times");
      navToggle.querySelector("i").classList.add("fa-bars");
    }
  });
});

const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    feedback.textContent = "Please fill in all fields before sending.";
    feedback.style.color = "#ff7866";
    return;
  }

  feedback.textContent = "Thanks, your message is sent. We will contact you soon!";
  feedback.style.color = "#8effb6";
  form.reset();
});
