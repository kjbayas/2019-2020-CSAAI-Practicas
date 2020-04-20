console.log("Ejecutando JS...");
//video 1
//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
video1.width=300;  //-- Tamaño de la pantalla de video
video1.height=200;
//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video1.src="https://github.com/kjbayas/videos/raw/master/video1.mp4";
//video 2
const video2 = document.getElementById("video2")
video2.width=300;  //-- Tamaño de la pantalla de video
video2.height=200;
video2.src="https://github.com/kjbayas/videos/raw/master/video2.mp4";

//video 3
const video3 = document.getElementById("video3")
video3.width=300;  //-- Tamaño de la pantalla de video
video3.height=200;
video3.src="https://github.com/kjbayas/videos/raw/master/video3.mp4";
//video 4
const video4 = document.getElementById("video4")
video4.width=700;  //-- Tamaño de la pantalla de video
video4.height=300;
video4.poster="https://github.com/kjbayas/videos/raw/master/dyp.png";
//-- Obtener los botones
const play1 = document.getElementById("play1")
//-- Función de retrollamada del botón de ver
play1.onclick = () => {
  console.log("Click1");
  video4.src=video1.src;
  video4.muted=false;
  video4.loop=false;
  document.getElementById("video1").style.border = "thick solid blue";
  document.getElementById("video2").style.border = "none";
  document.getElementById("video3").style.border = "none";
};
const play2 = document.getElementById("play2")
play2.onclick = () => {
  console.log("Click2");
  video4.src=video2.src;
  video4.muted=false;
  video4.loop=false;
  document.getElementById("video2").style.border = "thick solid blue";
  document.getElementById("video3").style.border = "none";
  document.getElementById("video1").style.border = "none";
};
const play3 = document.getElementById("play3")
play3.onclick = () => {
  console.log("Click3");
  video4.src=video3.src;
  video4.muted=false;
  video4.loop=false;
  document.getElementById("video3").style.border = "thick solid blue";
  document.getElementById("video1").style.border = "none";
  document.getElementById("video2").style.border = "none";
};
