document.addEventListener("DOMContentLoaded", function () {
  // === Animação Reveal ===
  const reveals = document.querySelectorAll(".reveal:not(.no-animation)");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Para animar só uma vez
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

  // === Ajustar padding-top dinamicamente com base na altura do header ===
  function ajustarPaddingMain() {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const alturaHeader = header.offsetHeight;
    main.style.paddingTop = `${alturaHeader}px`;
  }

  // Chamar ao carregar
  ajustarPaddingMain();

  // Chamar ao redimensionar janela
  window.addEventListener("resize", ajustarPaddingMain);

  // === Efeito de blur nas outras divs ao fazer hover numa image-grid ===
  const grids = document.querySelectorAll(".image-grid");

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
});
