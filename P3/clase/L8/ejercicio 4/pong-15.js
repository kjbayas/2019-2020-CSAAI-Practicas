console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Pintar todos los objetos en el canvas
function draw() {

  //----- Dibujar la Bola
  bola.draw();

  //-- Dibujar las raquetas
  raqI.draw();
  raqD.draw();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "80px Arial";
  ctx.fillStyle = "#C0E3C6";
  ctx.fillText("0", 200, 380);
  ctx.fillText("1", 340, 380);
}

//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola.x > canvas.width || bola.x <= 0) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vx = bola.vx * -1;
  }
  if (bola.y >= canvas.height || bola.y <= 0 ){
  bola.vy = bola.vy * -1;
  }

  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {
    bola.vx = bola.vx * -1 ;
  }
  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
    bola.vx = bola.vx * -1 ;
  }

  //Comprobar si la raqueta toca los bordes del canvas
  if (raqI.y <=0 || raqI.y >= canvas.height){
    raqI.y = raqI.y * -1;
  }
  //Comprobar si la raqueta toca los bordes del canvas
  if (raqD.y <=0 ){
    raqD.y = raqD.y * -1;
  }
  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.update()

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  switch (e.key) {
    case "a":
      raqI.v = 1;
      break;
    case "q":
      raqI.v = -1;
      break;
    case "p":
      raqD.v =  -1;
      break;
    case "l":
      raqD.v = 1;
      break;
    case " ":
      //-- Llevar bola a su posicion incicial
      bola.init();

      //-- Darle velocidad
      bola.vx = bola.vx_ini;
      bola.vy = bola.vy_ini;
    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }

  if (e.key == "p" || e.key == "l") {
    raqD.v = 0;
  }
}
