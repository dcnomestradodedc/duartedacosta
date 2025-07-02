// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("imgOverlay");
  const expandedImg = document.getElementById("expandedImg");
  const closeBtn = document.querySelector(".close-btn");

  // Seleciona todas as imagens clicáveis
  const images = document.querySelectorAll(
    ".image-full-width img, .image-full-sec img, .image-grid img"
  );

  images.forEach((img) => {
    img.style.cursor = "zoom-in"; // muda cursor para indicar clicável
    img.addEventListener("click", () => {
      expandedImg.src = img.src;
      overlay.style.display = "flex";
    });
  });

  // Fecha o overlay quando clicas no botão fechar (a cruz)
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    expandedImg.src = "";
  });

  // Opcional: fecha o overlay clicando fora da imagem ampliada
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
      expandedImg.src = "";
    }
  });
});
