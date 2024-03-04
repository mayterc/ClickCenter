fetch("https://randomuser.me/api/?results=6")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    crearTarjetas(data.results);
  });
function crearTarjetas(usuarios) {
  let containerCard = document.querySelector(".containerCard");
  usuarios.forEach((usuarios) => {
    containerCard.innerHTML += `
        <div class="card">
            <div class="titleCards">
            <img class="imgCard" src="/assets/tramites.png" alt="imgTramites" />
            <h3 class="titleCard">${usuarios.name.first}</h3>
        </div>

        <p class="texto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
        </p>
          <button class="btnCard">Ver más</button>
        </div>
        `;
  });
}
