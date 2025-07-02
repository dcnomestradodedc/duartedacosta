document.addEventListener("DOMContentLoaded", () => {
  // Seu código para o overlay continua aqui (omitido para focar no vídeo)

  const video = document.querySelector(".image-full-sec video");
  if (video) {
    // garante que está mudo e playsinline
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("muted", ""); 
    video.setAttribute("playsinline", "");

    // Tenta tocar o vídeo depois de 200ms
    setTimeout(() => {
      video.play().catch(() => {
        console.log("Autoplay falhou, aguardando interação do usuário");

        // Se falhar, espera qualquer interação do usuário para tentar de novo
        const tryPlayOnInteraction = () => {
          video.play().catch(() => {
            console.log("Tentativa após interação falhou.");
          });
          // Remove o event listener após tentar
          window.removeEventListener("click", tryPlayOnInteraction);
          window.removeEventListener("touchstart", tryPlayOnInteraction);
        };

        window.addEventListener("click", tryPlayOnInteraction);
        window.addEventListener("touchstart", tryPlayOnInteraction);
      });
    }, 200);
  }
});
