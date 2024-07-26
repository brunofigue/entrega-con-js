// Selecciona la galería y el contenedor de la imagen completa
const galeria = document.querySelector('.galeria');
const imagenCompleta = document.querySelector('.imagen-completa');

// Agrega un evento de clic a cada imagen de la galería
galeria.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    // Obtiene la URL de la imagen seleccionada
    const imagenSrc = e.target.src;
    
    // Establece la imagen seleccionada como la imagen completa
    imagenCompleta.querySelector('.imagen-completa-src').src = imagenSrc;
    
    // Muestra el contenedor de la imagen completa
    imagenCompleta.style.display = 'block';
  }
});

// Agrega un evento de clic al botón de cerrar
imagenCompleta.querySelector('.cerrar').addEventListener('click', () => {
  // Oculta el contenedor de la imagen completa
  imagenCompleta.style.display = 'none';
});