document.addEventListener("DOMContentLoaded", () => {
  const flecha = document.querySelector('.flecha-abajo-fija');
  if (!flecha) return;
   // Al hacer clic en la flecha, ir a la siguiente sección visible
  flecha.addEventListener('click', () => {
    // Todas las secciones principales
    const secciones = Array.from(document.querySelectorAll('section'));
    // Encuentra la primera sección cuyo top está por debajo del scroll actual
    const siguiente = secciones.find(sec => sec.getBoundingClientRect().top > 10);
    if (siguiente) {
      siguiente.scrollIntoView({ behavior: 'smooth' });
    }
  });

  let scrollTimeout;

  function hideFlecha() {
    flecha.style.opacity = "0";
    flecha.style.pointerEvents = "none";
  }

  function showFlecha() {
    flecha.style.opacity = "1";
    flecha.style.pointerEvents = "auto";
  }

  function handleScroll() {
    hideFlecha();
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(showFlecha, 1500); // 1.5 segundos sin scroll
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);

  // Mostrar la flecha al cargar
  showFlecha();
});