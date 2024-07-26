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
imagenCompleta.onclick =() => document.exitFullscreen();

});
let tiempoRestante = 600; // 10 minutos en segundos
let intervalo;

document.getElementById('iniciar-contador').addEventListener('click', iniciarContador);
document.getElementById('detener-contador').addEventListener('click', detenerContador);

function iniciarContador() {
  intervalo = setInterval(contarRegresiva, 1000);
  document.getElementById('iniciar-contador').disabled = true;
  document.getElementById('detener-contador').disabled = false;
}

function detenerContador() {
  clearInterval(intervalo);
  document.getElementById('iniciar-contador').disabled = false;
  document.getElementById('detener-contador').disabled = true;
}

function contarRegresiva() {
  tiempoRestante--;
  let minutos = Math.floor(tiempoRestante / 60);
  let segundos = tiempoRestante % 60;
  document.getElementById('tiempo-restante').innerText = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  if (tiempoRestante <= 0) {
    clearInterval(intervalo);
    alert('Tiempo agotado!');
  }
}