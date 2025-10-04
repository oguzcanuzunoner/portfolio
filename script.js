// Scroll indicator
function updateScrollIndicator() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
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
    const target = parseInt(stat.getAttribute("data-target"));
    const increment = target / 100;
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
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Event listeners
window.addEventListener("scroll", () => {
  updateScrollIndicator();
  animateOnScroll();
  animateStats();
});

// Language switching functionality
let currentLanguage = "en";

function switchLanguage(lang) {
  currentLanguage = lang;

  // Update all elements with data attributes
  const elements = document.querySelectorAll("[data-en][data-tr]");
  elements.forEach((element) => {
    const text = element.getAttribute(`data-${lang}`);
    if (text) {
      element.textContent = text;
    }
  });

  // Update language buttons (both desktop and mobile)
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });

  // Save language preference
  localStorage.setItem("preferred-language", lang);
}

// Language button event listeners
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    switchLanguage(lang);
  });
});

// Theme switching functionality
let isDarkMode = true;

function toggleTheme() {
  isDarkMode = !isDarkMode;
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");

  if (isDarkMode) {
    body.classList.remove("light-mode");
    themeToggle.textContent = "🌙";
    mobileThemeToggle.textContent = "🌙";
  } else {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
    mobileThemeToggle.textContent = "☀️";
  }

  // Save theme preference
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
}

// Theme toggle event listeners
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");

  themeToggle.addEventListener("click", toggleTheme);
  mobileThemeToggle.addEventListener("click", () => {
    toggleTheme();
    closeMobileMenu();
  });
});

// Mobile menu event listeners
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileClose = document.getElementById("mobileClose");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenuToggle.addEventListener("click", toggleMobileMenu);
  mobileClose.addEventListener("click", closeMobileMenu);

  // Close mobile menu when clicking on links
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Mobile language buttons
  const mobileLangEn = document.getElementById("mobileLangEn");
  const mobileLangTr = document.getElementById("mobileLangTr");

  mobileLangEn.addEventListener("click", () => {
    switchLanguage("en");
    closeMobileMenu();
  });

  mobileLangTr.addEventListener("click", () => {
    switchLanguage("tr");
    closeMobileMenu();
  });
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Load saved theme preference or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    isDarkMode = false;
    document.body.classList.add("light-mode");
    document.getElementById("themeToggle").textContent = "☀️";
    document.getElementById("mobileThemeToggle").textContent = "☀️";
  }

  // Load saved language preference or default to English
  const savedLang = localStorage.getItem("preferred-language") || "en";
  switchLanguage(savedLang);

  animateOnScroll();
  animateStats();
});
