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

function mostrarTexto(idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.innerText = mensaje;
}

function desbloquearBotones() {
  document.getElementById("btnArriba").disabled = false;
  document.getElementById("btnAbajo").disabled = false;
  document.getElementById("btnIzquierda").disabled = false;
  document.getElementById("btnDerecha").disabled = false;
  document.getElementById("btnPausa").disabled = false;
  document.getElementById("btnIniciar").disabled = false;
  document.getElementById("btnReiniciar").disabled = false;
}
function bloquearBotones() {
  document.getElementById("btnArriba").disabled = true;
  document.getElementById("btnAbajo").disabled = true;
  document.getElementById("btnIzquierda").disabled = true;
  document.getElementById("btnDerecha").disabled = true;
  document.getElementById("btnPausa").disabled = true;
  document.getElementById("btnIniciar").disabled = true;

  // reiniciar sigue activo
  document.getElementById("btnReiniciar").disabled = false;
}