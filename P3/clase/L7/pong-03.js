console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//----- Dibujar la Bola
ctx.beginPath();
ctx.fillStyle='lightblue';

//-- x,y, anchura, altura
ctx.rect(100, 200, 20, 20);
ctx.fill();

//------- Dibujar las raquetas
ctx.beginPath();
ctx.fillStyle='white';

//-- Raqueta izquierda
ctx.rect(25, 200, 10, 60);

//-- Raqueta derecha
ctx.rect(560, 100, 10, 60);

//-- Pintar!
ctx.fill();
