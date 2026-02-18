let translations = {};

async function loadLanguage(lang) {
  const response = await fetch(`../translations/${lang}.json`);
  translations = await response.json();
  applyLanguage();
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key =
      el.getAttribute("data-i18n");
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  loadLanguage(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "ru";
  loadLanguage(lang);
});

function showImage(src) {
  document.getElementById("modalImage").src = src;
}

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});

const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const burger = document.querySelector('.burger')
const list = document.querySelector('.responsive')

burger.addEventListener('click', () => {
    // toggle open class to trigger CSS transition
    list.classList.toggle('open');
})


