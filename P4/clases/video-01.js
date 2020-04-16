console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
video1.width=400;  //-- Tamaño de la pantalla de video
video1.height=300;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";

//-- Obtener los botones
const play = document.getElementById("play")
const stop = document.getElementById("stop")

//-- Función de retrollamada del botón de ver
play.onclick = () => {
  console.log("Click!");
  video1.src="http://127.0.0.1:8887/videos/lilo%26stitch.mp4"
  video1.play();
};

//-- Funcion de retrollamada del boton de parar
stop.onclick = () => {
  video1.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video1.src=null;
}
