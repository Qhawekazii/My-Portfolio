//Typing effect
const text = [
  "Building fullstack web apps",
  "Android development with Kotlin",
  "UI-focused development"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const element = document.querySelector(".typing");
  if (!element) return;

  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    element.textContent = currentText;

    if (j === text[i].length) isDeleting = true;

    if (j === 0) {
      isDeleting = false;
      i++;
      if (i === text.length) i = 0;
    }
  }

  setTimeout(type, 120);
}

type();
 // Fade on Scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".project-card, .card, .skill").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});


window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  if (hero) hero.classList.add("show");
});