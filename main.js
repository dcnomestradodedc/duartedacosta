document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector("main");
  
  // Pega todas as divs .image-grid, incluindo a .no-animation
  const allGrids = Array.from(document.querySelectorAll(".image-grid"));

  const hasShuffled = sessionStorage.getItem("hasShuffled");

  if (hasShuffled) {
    // Embaralhar todas as divs .image-grid (inclusive a no-animation)
    for (let i = allGrids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allGrids[i], allGrids[j]] = [allGrids[j], allGrids[i]];
    }

    // Repor todas no DOM na ordem aleatória
    allGrids.forEach(div => main.appendChild(div));

    // Agora, garantir que a primeira div NÃO tem animação e as outras sim
    allGrids.forEach((div, idx) => {
      if (idx === 0) {
        div.classList.remove("reveal");
        div.classList.add("no-animation");
        div.classList.remove("active"); // remove se tiver
      } else {
        div.classList.add("reveal");
        div.classList.remove("no-animation");
      }
    });

  } else {
    sessionStorage.setItem("hasShuffled", "true");
  }

  // ===== Animação Reveal =====
  const reveals = document.querySelectorAll(".reveal:not(.no-animation)");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  reveals.forEach((reveal) => {
    observer.observe(reveal);
  });

  // ===== Ajuste dinâmico do padding-top =====
  function ajustarPaddingMain() {
    const header = document.querySelector("header");
    const alturaHeader = header.offsetHeight;
    main.style.paddingTop = `${alturaHeader}px`;
  }

  ajustarPaddingMain();
  window.addEventListener("resize", ajustarPaddingMain);

  // ===== Blur nas outras divs ao fazer hover (desktop apenas) =====
  const grids = document.querySelectorAll(".image-grid");
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    grids.forEach((grid) => {
      grid.addEventListener("mouseenter", () => {
        grids.forEach((g) => {
          if (g !== grid) {
            g.classList.add("blurred");
          }
        });
      });

      grid.addEventListener("mouseleave", () => {
        grids.forEach((g) => g.classList.remove("blurred"));
      });
    });
  }
});
