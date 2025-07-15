document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});

// transition effect
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("transition-overlay");
  const canvas = document.getElementById("polygraph-canvas");
  const ctx = canvas.getContext("2d");

  // Set canvas full screen
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Target all nav links and pricing buttons
  document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", handleClick);
  });
});
