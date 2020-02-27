console.log("Ejecutando JS...");

display = document.getElementById("display")
igual = document.getElementById("igual")
clear = document.getElementById("clear")
del = document.getElementById("del")

let boton = document.getElementsByClassName("tecla")
for (i=0; i<boton.length; i++) {
  boton[i].onclick = (bot) => {
    display.innerHTML += bot.target.value;
  }
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
del.onclick = () => {
  display.innerHTML = "";
}
