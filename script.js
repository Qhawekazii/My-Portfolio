/* =========================
   TYPING EFFECT
========================= */

const text = [
  "Fullstack Developer",
  "Android Developer",
  "UI Designer"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type(){

  const element = document.querySelector(".typing");

  if(i < text.length){

    if(!isDeleting && j <= text[i].length){

      currentText = text[i].substring(0, j++);

    }

    else if(isDeleting && j >= 0){

      currentText = text[i].substring(0, j--);

    }

    element.textContent = currentText;

    if(j === text[i].length){

      isDeleting = true;

    }

    if(j === 0){

      isDeleting = false;
      i++;

      if(i === text.length){

        i = 0;

      }
    }
  }

  setTimeout(type, 120);
}

type();

/* =========================
   SCROLL ANIMATION
========================= */

const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {

  faders.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 50){

      el.classList.add('show');

    }

  });

});

/* HERO SHOW ON LOAD */

window.addEventListener("load", () => {

  document.querySelector(".hero").classList.add("show");

});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".project-card, .card, .skill").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});