const sectionIds = ["home", "about", "courses", "blog", "contact"];
const sections = document.querySelectorAll("[data-section]");
const navLinks = document.querySelectorAll("[data-nav]");
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const contactForm = document.getElementById("contactForm");

const setActiveNav = (id) => {
  navLinks.forEach((link) => {
    const target = link.getAttribute("data-nav");
    link.classList.toggle("active", target === id);
  });
};

const showSection = (id, updateHash = true) => {
  const targetId = sectionIds.includes(id) ? id : "home";
  sections.forEach((section) => {
    section.classList.toggle("active", section.id === targetId);
  });
  setActiveNav(targetId);

  if (updateHash && window.location.hash !== `#${targetId}`) {
    history.replaceState(null, "", `#${targetId}`);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  revealActiveSection();
};

const closeMobileNav = () => {
  siteNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
};

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("data-nav");
    if (!targetId) return;
    event.preventDefault();
    showSection(targetId);
    closeMobileNav();
  });
});

navToggle.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isExpanded));
  siteNav.classList.toggle("open");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

const revealActiveSection = () => {
  const activeSection = document.querySelector(".app-section.active");
  if (!activeSection) return;

  activeSection.querySelectorAll(".fade-in").forEach((item) => {
    item.classList.remove("visible");
    revealObserver.observe(item);
  });
};

const setError = (id, message) => {
  const errorElement = document.getElementById(id);
  if (errorElement) {
    errorElement.textContent = message;
  }
};

const validateContactForm = () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const successText = document.getElementById("formSuccess");

  let isValid = true;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  successText.textContent = "";
  setError("nameError", "");
  setError("emailError", "");
  setError("messageError", "");

  if (name.length < 2) {
    setError("nameError", "Please enter your name.");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setError("emailError", "Please enter a valid email address.");
    isValid = false;
  }

  if (message.length < 10) {
    setError("messageError", "Message should be at least 10 characters.");
    isValid = false;
  }

  if (isValid) {
    successText.textContent = "Thanks! Your message has been sent successfully.";
    contactForm.reset();
  }
};

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateContactForm();
});

window.addEventListener("hashchange", () => {
  const id = window.location.hash.replace("#", "");
  showSection(id, false);
});

document.addEventListener("click", (event) => {
  if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
    closeMobileNav();
  }
});

const initialHash = window.location.hash.replace("#", "") || "home";
showSection(initialHash, false);
