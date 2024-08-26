const form = document.querySelector("#form");
const formContainer = document.querySelector("#formContainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const user = Object.fromEntries(formData);

  Swal.fire({
    title: "Registro Completado",
    text: `${user.nombre} ${user.apellido} gracias por su registro`,
    icon: "success",
    confirmButtonText: "Volver a la pagina principal",
  }).then(() => {
    location.replace("../index.html");
  });
});
