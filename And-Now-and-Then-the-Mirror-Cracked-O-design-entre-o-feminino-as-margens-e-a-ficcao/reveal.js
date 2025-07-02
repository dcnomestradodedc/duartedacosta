document.addEventListener("DOMContentLoaded", () => {
  // Seu código existente para o overlay das imagens
  const overlay = document.getElementById("imgOverlay");
  const expandedImg = document.getElementById("expandedImg");
  const closeBtn = document.querySelector(".close-btn");

  const images = document.querySelectorAll(
    ".image-full-width img, .image-full-sec img, .image-grid img"
  );

  images.forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      expandedImg.src = img.src;
      overlay.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    expandedImg.src = "";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
      expandedImg.src = "";
    }
  });

  // --- CÓDIGO NOVO PARA O VÍDEO ---
  const video = document.querySelector(".image-full-sec video");
  if (video) {
    video.muted = true; // garantir que está mudo
    video.play().catch(() => {
      // autoplay falhou — pode acontecer sem interação do usuário
      console.log("Autoplay do vídeo falhou. Aguarde interação do usuário.");
    });
  }
});
