let containerCard = document.querySelector(".containerCard");

function cargarDatos() {
  fetch("datos.json")
    .then((respuesta) => respuesta.json())
    .then((servicios) => {
      // console.log(respuesta);
      servicios.forEach((servicios) => {
        containerCard.innerHTML += `
        <div class="card">
            <div class="titleCards">
            <img class="imgCard" src=${servicios.img} />
            <h3 class="titleCard">${servicios.title}</h3>
        </div>

        <p class="texto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
        </p>
          <button class="btnCard">Ver más</button>
        </div>
        `;
      });
    });
}

cargarDatos();
