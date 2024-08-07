const directions = [
  {
    image: "./assets/Cordoba.jpg",
    title: "Cordoba",
  },
  {
    image: "./assets/Cordoba.jpg",
    title: "Cordoba",
  },
  {
    image: "./assets/Cordoba.jpg",
    title: "Cordoba",
  },
  {
    image: "./assets/Cordoba.jpg",
    title: "Cordoba",
  },
];

const directionsList = document.querySelector("#directionsList");

function updateDirections(directionsArray) {
  directionsList.innerHTML = "";
  directionsArray.forEach((direc) => {
    let contenedor = document.createElement("div");
    contenedor.className = "direction-card";
    contenedor.innerHTML = `
        <img src="${direc.image}" alt="cordoba" />
        <h3>${direc.title}</h3>
    `;

    directionsList.appendChild(contenedor);
  });
}

updateDirections(directions);
