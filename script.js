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

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const submitButton = contactForm.querySelector("button[type='submit']");

    if (!name || !email || !message) {
      formStatus.textContent = "Please fill in all the fields before sending.";
      formStatus.className = "form-status error";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.className = "form-status error";
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    formStatus.textContent = "Sending your message...";
    formStatus.className = "form-status sending";

    try {
      const response = await fetch("https://formsubmit.co/ajax/emilym01@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: new URLSearchParams({
          name,
          email,
          message,
          _subject: "New portfolio contact message"
        }).toString()
      });

      if (!response.ok) {
        throw new Error("Unable to send message right now.");
      }

      contactForm.reset();
      formStatus.textContent = "Thanks! Your message was sent successfully.";
      formStatus.className = "form-status success";
    } catch (error) {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:emilym01@gmail.com?subject=${subject}&body=${body}`;
      formStatus.textContent = "Your email app should open with your message. Please send it from there if needed.";
      formStatus.className = "form-status success";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      }
    }
  });
}