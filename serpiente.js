// 1. Capturamos el canvas y su contexto de dibujo
const canvas = document.getElementById("canvasJuego");
const ctx = canvas.getContext("2d");

const TAMANIO_CELDA = 25;
let direccionSerpiente = "izquierda";
//const serpiente = [
////x: Math.floor(canvas.width / TAMANIO_CELDA / 2),
//y: canvas.height / TAMANIO_CELDA / 2,
//},
//{
// x: Math.floor(canvas.width / TAMANIO_CELDA / 2) + 1,
//y: canvas.height / TAMANIO_CELDA / 2,
//},
//{
// x: Math.floor(canvas.width / TAMANIO_CELDA / 2) + 2,
//y: canvas.height / TAMANIO_CELDA / 2,
//},
//{ x: Math.floor(canvas.width / TAMANIO_CELDA / 2) + 2,
// y: (canvas.height / TAMANIO_CELDA / 2)+1 },
//];

const columnas = canvas.width / TAMANIO_CELDA;
const filas = canvas.height / TAMANIO_CELDA;
let serpiente = crearSerpienteRandom();
//const serpiente = [
//{
//   x: columnas - 1,
//  y: filas / 2,
//},
// {
//  x: columnas - 1,
// y: filas - 11,
//},
//{
// x: columnas - 2,
//y: filas - 11,
//},
//{
// x: columnas - 2,
//y: filas - 10,
//},
//{
// x: columnas - 2,
//y: filas - 9,
//},
//];

// Primera pintura del juego al cargar la página

dibujarTodo();

// =========================
// FUNCIONES DE DIBUJO
// =========================

function limpiarCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function pintarSerpiente() {
  for (let i = 0; i < serpiente.length; i++) {
    if (i === 0) {
      pintarParte(serpiente[i].x, serpiente[i].y, "green");
    } else {
      pintarParte(serpiente[i].x, serpiente[i].y, "yellow");
    }
  }
}

function dibujarTodo() {
  limpiarCanvas();
  dibujarTablero();
  pintarSerpiente();
  //pintarParte(5, 5);
  //pintarParte(10, 2);
  //pintarParte(
  // (canvas.height - TAMANIO_CELDA) / TAMANIO_CELDA,
  //  (canvas.width - TAMANIO_CELDA) / TAMANIO_CELDA,
  //);
  //pintarParte((canvas.height - TAMANIO_CELDA) / TAMANIO_CELDA, 10);
  //pintarParte(0, (canvas.width - TAMANIO_CELDA) / TAMANIO_CELDA);
  //pintarParte((canvas.height - TAMANIO_CELDA) / TAMANIO_CELDA, 0);
}

function dibujarTablero() {
  ctx.strokeStyle = "green";
  for (let x = 0; x <= canvas.width; x += TAMANIO_CELDA) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas.height; y += TAMANIO_CELDA) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

function pintarParte(lineaX, lineaY, color) {
  let valorX = lineaX * TAMANIO_CELDA;
  let valorY = lineaY * TAMANIO_CELDA;
  ctx.fillStyle = color;
  ctx.fillRect(valorX, valorY, TAMANIO_CELDA, TAMANIO_CELDA);
  ctx.strokeStyle = "black";
  ctx.strokeRect(valorX, valorY, TAMANIO_CELDA, TAMANIO_CELDA);
}

//adelanto 12mAY26

function cambiarDireccion(direccionNueva) {
  direccionSerpiente = direccionNueva;
}

function moverSerpiente() {
  let nuevaCabeza;

  switch (direccionSerpiente) {
    case "derecha":
      nuevaCabeza = moverDerecha();
      break;

    case "izquierda":
      nuevaCabeza = moverIzquierda();
      break;

    case "arriba":
      nuevaCabeza = moverArriba();
      break;
    case "abajo":
      nuevaCabeza = moverAbajo();
      break;
  }

  serpiente.unshift(nuevaCabeza);

  serpiente.pop();

  dibujarTodo();
}

function moverDerecha() {
  let cabeza = serpiente[0];

  let nuevaCabeza = {
    x: cabeza.x + 1,
    y: cabeza.y,
  };

  return nuevaCabeza;
}

function moverIzquierda() {
  let cabeza = serpiente[0];

  let nuevaCabeza = {
    x: cabeza.x - 1,
    y: cabeza.y,
  };

  return nuevaCabeza;
}

function moverArriba() {
  let cabeza = serpiente[0];

  let nuevaCabeza = {
    x: cabeza.x,
    y: cabeza.y - 1,
  };

  return nuevaCabeza;
}

function moverAbajo() {
  let cabeza = serpiente[0];

  let nuevaCabeza = {
    x: cabeza.x,
    y: cabeza.y + 1,
  };

  return nuevaCabeza;
}

setInterval(moverSerpiente, 300);

//crear aleaotiro la serpiete
function crearSerpienteRandom() {
  let xRamdom = obtenerNumeroRandom(columnas - 2) + 2;
  let yRamdom = obtenerNumeroRandom(filas - 2) + 2;

  let orientacion = obtenerNumeroRandom(2);

  // HORIZONTAL
  if (orientacion === 0) {

    // derecha
    if (obtenerNumeroRandom(2) === 0) {

      direccionSerpiente = "derecha";

      return [
        { x: xRamdom, y: yRamdom },
        { x: xRamdom - 1, y: yRamdom },
        { x: xRamdom - 2, y: yRamdom },
      ];
    }

    // izquierda
    direccionSerpiente = "izquierda";

    return [
      { x: xRamdom, y: yRamdom },
      { x: xRamdom + 1, y: yRamdom },
      { x: xRamdom + 2, y: yRamdom },
    ];
  }

  // VERTICAL

  // abajo
  if (obtenerNumeroRandom(2) === 0) {

    direccionSerpiente = "abajo";

    return [
      { x: xRamdom, y: yRamdom },
      { x: xRamdom, y: yRamdom - 1 },
      { x: xRamdom, y: yRamdom - 2 },
    ];
  }

  // arriba
  direccionSerpiente = "arriba";

  return [
    { x: xRamdom, y: yRamdom },
    { x: xRamdom, y: yRamdom + 1 },
    { x: xRamdom, y: yRamdom + 2 },
  ];
}
