/* ================================
   MOBILE MENU
================================ */
function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

/* ================================
   SMOOTH SCROLL
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    document.getElementById("nav").classList.remove("show");
  });
});

/* ================================
   SCROLL REVEAL (IMPROVED)
================================ */
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ================================
   TYPING EFFECT (HERO)
================================ */
const typingText = document.querySelector(".hero-card h2 span");
const words = ["Data Science Enthusiast", "Full Stack Developer", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex++);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => isDeleting = true, 1200);
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

/* ================================
   CUSTOM CURSOR
================================ */
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("a, button, .skill, .btn").forEach(el => {
  el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});

/* ================================
   MAGNETIC BUTTON EFFECT
================================ */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    btn.style.transform = `
      translate(
        ${(e.clientX - rect.left - rect.width / 2) * 0.25}px,
        ${(e.clientY - rect.top - rect.height / 2) * 0.25}px
      )
    `;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

/* ================================
   3D TILT EFFECT (SKILLS)
================================ */
document.querySelectorAll(".skill").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 15;
    const rotateY = ((x / rect.width) - 0.5) * -15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

/* ================================
   HERO PARALLAX
================================ */
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-card");
  hero.style.transform = `translateY(${window.scrollY * 0.15}px)`;
});

/* ================================
   NAVBAR HIDE ON SCROLL
================================ */
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const current = window.pageYOffset;
  navbar.style.top = current > lastScroll ? "-90px" : "0";
  lastScroll = current;
});
