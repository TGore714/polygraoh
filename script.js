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

  // Polygraph line animation function
function drawPolygraph(callback) {
  let x = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#e7f300';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);

  // 👇 Adjust speed based on screen size
  const isMobile = window.innerWidth <= 768;
  const speed = isMobile ? 6 : 14;        // How far x moves each frame
  const interval = isMobile ? 10 : 4;     // How fast each frame runs (ms)

  const animation = setInterval(() => {
    const y = canvas.height / 2 + Math.sin(x * 0.05) * 40;
    ctx.lineTo(x, y);
    ctx.stroke();

    x += speed;

    if (x > canvas.width) {
      clearInterval(animation);
      callback();
    }
  }, interval);
}
  
  function handleClick(e) {
    const link = e.currentTarget;
    const href = link.getAttribute("href");

    if (href && !href.startsWith("#")) {
      e.preventDefault();
      overlay.classList.add("active");
      drawPolygraph(() => {
        window.location.href = href;
      });
    }
  }

  // Target all nav links and pricing buttons
  document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", handleClick);
  });
});
