// Scroll indicator
function updateScrollIndicator() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  document.getElementById("scrollIndicator").style.width = scrollPercent + "%";
}

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

// Stats counter animation
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((stat) => {
    const target = parseInt(stat.getAttribute("data-target"), 10);
    const increment = Math.max(target / 100, 0.05);
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        stat.textContent = Math.ceil(current);
        setTimeout(updateCounter, 20);
      } else {
        stat.textContent = target;
      }
    };

    const rect = stat.getBoundingClientRect();
    if (
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      !stat.classList.contains("animated")
    ) {
      stat.classList.add("animated");
      updateCounter();
    }
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  });
});

// Scroll listener (passive: tarayici scroll'u bloklamasin)
window.addEventListener(
  "scroll",
  () => {
    updateScrollIndicator();
    animateOnScroll();
    animateStats();
  },
  { passive: true }
);

// Language switching
let currentLanguage = "en";

function switchLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang; // <html lang> guncelle (SEO + erisilebilirlik)

  document.querySelectorAll("[data-en][data-tr]").forEach((element) => {
    const text = element.getAttribute("data-" + lang);
    if (text) element.textContent = text;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem("preferred-language", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => switchLanguage(btn.getAttribute("data-lang")));
});

// Theme switching
let isDarkMode = true;

function applyTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
  document.body.classList.toggle("light-mode", !isDarkMode);
  const icon = isDarkMode ? "🌙" : "☀️";
  if (themeToggle) themeToggle.textContent = icon;
  if (mobileThemeToggle) mobileThemeToggle.textContent = icon;
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  applyTheme();
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
}

function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
  document.body.style.overflow = "";
}

// Init — tek DOMContentLoaded blogu
document.addEventListener("DOMContentLoaded", () => {
  // Tema
  isDarkMode = (localStorage.getItem("theme") || "dark") !== "light";
  applyTheme();
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("mobileThemeToggle").addEventListener("click", () => {
    toggleTheme();
    closeMobileMenu();
  });

  // Mobil menu
  const mobileMenu = document.getElementById("mobileMenu");
  document.getElementById("mobileMenuToggle").addEventListener("click", toggleMobileMenu);
  document.getElementById("mobileClose").addEventListener("click", closeMobileMenu);
  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

  // Mobil dil butonlari
  document.getElementById("mobileLangEn").addEventListener("click", () => {
    switchLanguage("en");
    closeMobileMenu();
  });
  document.getElementById("mobileLangTr").addEventListener("click", () => {
    switchLanguage("tr");
    closeMobileMenu();
  });

  // Dil
  switchLanguage(localStorage.getItem("preferred-language") || "en");

  animateOnScroll();
  animateStats();
});
