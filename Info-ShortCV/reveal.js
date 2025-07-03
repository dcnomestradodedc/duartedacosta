document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function revealElements() {
    reveals.forEach(function (el) {
      if (isElementInViewport(el)) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealElements);
  window.addEventListener("resize", revealElements);

  // Run it once on load
  revealElements();
});
