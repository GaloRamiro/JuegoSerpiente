function obtenerNumeroRandom(limite) {
  return Math.floor(Math.random() * limite);
}

//mostar mensaje de game over
function gameOver(mensaje) {
  let alertaAnterior = document.querySelector(".overlay-alerta");

  if (alertaAnterior) {
    alertaAnterior.remove();
  }

  let overlay = document.createElement("div");

  overlay.className = "overlay-alerta";

  overlay.innerHTML = `
    
    <div class="alerta-modal">

      <div class="alerta-check">
        ❌
      </div>

      <h2>PERDISTE</h2>

      <p>${mensaje}</p>

    </div>

  `;

  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.classList.add("mostrar");
  }, 50);

  setTimeout(() => {
    overlay.classList.remove("mostrar");

    setTimeout(() => {
      overlay.remove();
    }, 400);
  }, 2200);
}
