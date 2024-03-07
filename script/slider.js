let cardSlider = document.querySelector(".cardSlider");

function cargarDatosServicio() {
  fetch("servicios.json")
    .then((res) => res.json())
    .then((res) => {
      //console.log(res);
      res.forEach((res) => {
        cardSlider.innerHTML += `
                    <div class="containerCardSlider">
                        <div class="backgroundCardSlider"></div>
                        <div class="containerSlider">
                        <h3 class="titleSlider">${res.titulo}</h3>
                        <ol class="listaServicies">
                            <li class="servicies1">
                            <i class=" iconSlider fa-solid fa-check"></i>${res.servicie.servicio1}
                            </li>
                            <li class="servicies2">
                            <i class=" iconSlider fa-solid fa-check"></i>Baja de placas
                            </li>
                            <li class="servicies3">
                            <i class=" iconSlider fa-solid fa-check"></i>Alta de vehículo nuevo
                            </li>
                            <li class="servicies4">
                            <i class=" iconSlider fa-solid fa-check"></i>Alta de vehículo otro Edo.
                            </li>
                        </ol>
                        </div>
                        <img class="imgSlider" src=${res.iconSlider} />
                    </div>
                    
                    `;
        });
    });
}

cargarDatosServicio();
