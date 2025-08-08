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

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".dropdown-toggle");

  toggles.forEach(toggle => {
    const menu = toggle.nextElementSibling; // 一つ下の ul.dropdown-menu を想定

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");

      if (toggle.classList.contains("active")) {
        menu.style.maxHeight = menu.scrollHeight + "px";
        menu.style.opacity = 1;
        menu.style.paddingTop = "10px";
        menu.style.paddingBottom = "10px";
      } else {
        menu.style.maxHeight = 0;
        menu.style.opacity = 0;
        menu.style.paddingTop = 0;
        menu.style.paddingBottom = 0;
      }
    });
  });
});


// アコーディオン機能
document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll(".accordion-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const content = toggle.nextElementSibling;
            
            toggle.classList.toggle("active");
            
            if (toggle.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = 1;
            } else {
                content.style.maxHeight = 0;
                content.style.opacity = 0;
            }
        });
    });
});
