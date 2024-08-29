const directions = [
  {
    image: "./assets/Cordoba.jpg",
    title: "Salta",
    fecha: "22/09/2024",
  },
  {
    image: "./assets/cards 2.jpg",
    title: "Cordoba",
    fecha: "22/10/2024",
  },
  {
    image: "./assets/card 1.jpg",
    title: "Catamarca",
    fecha: "22/10/2024",
  },
  {
    image: "./assets/cards 3.jpg",
    title: "San Luis",
    fecha: "22/12/2024",
  },
];

const directionsList = document.querySelector("#directionsList");

function updateDirections(directionsArray) {
  directionsList.innerHTML = "";
  if (directionsArray.length == 0) {
    directionsList.innerHTML = `<h2>No hay elementos en esta busqueda</h2>`;
  } else {
    directionsArray.forEach((direc) => {
      let contenedor = document.createElement("div");
      contenedor.className = "direction-card";
      contenedor.innerHTML = `
          <img src="${direc.image}" alt="cordoba" />
          <h3>${direc.title}</h3>
          <h5>${direc.fecha}</h5>
          <button>Ver más</button>
      `;

      directionsList.appendChild(contenedor);
    });
  }
}

updateDirections(directions);

const browseProvice = document.querySelector("#browseProvice");

browseProvice.addEventListener("input", (e) => {
  const filteredDirections = directions.filter((direc) =>
    direc.title.toUpperCase().includes(e.target.value.toUpperCase())
  );
  updateDirections(filteredDirections);
});

const openNavBtn = document.getElementById("openNavBtn");
const navContainer = document.getElementById("navContainer");

openNavBtn.addEventListener("click", () => {
  navContainer.classList.toggle("nav-open-container");
});
