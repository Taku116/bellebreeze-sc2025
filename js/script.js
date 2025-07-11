document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('intro-overlay');
  overlay.addEventListener('click', function () {
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 1000);
  });
});
