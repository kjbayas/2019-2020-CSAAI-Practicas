console.log("Ejecutando JS...");

display = document.getElementById("display")
igual = document.getElementById("igual")
clear = document.getElementById("C")
del = document.getElementById("CE")

let boton = document.getElementsByClassName("tecla")

for (i=0; i<boton.length; i++) {
  boton[i].onclick = (bot) => {
    display.innerHTML += bot.target.value;
  }
}
let simbolo = document.getElementsByClassName("sim")
for (i=0; i<simbolo.length; i++) {
  simbolo[i].onclick = (simb) => {
    display.innerHTML += simb.target.value;
  }
}
//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);

}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "";
}
del.onclick = () => {
  display.innerHTML = display.innerHTML.slice(0,-1);
}
