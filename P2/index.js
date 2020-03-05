console.log("Ejecutando JS...");


display = document.getElementById("display")
igual = document.getElementById("igual")
clear = document.getElementById("C")
del = document.getElementById("CE")

const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4,
}

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
//Igual
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}
//Eliminar Todo
clear.onclick = () => {
  display.innerHTML = "";
}
// elimina Uno
del.onclick = () => {
  display.innerHTML = display.innerHTML.slice(0,-1);
}

function number(num)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.INIT) {
    display.innerHTML = num;
    estado = ESTADO.OP1;
  }
  // .......... Resto del código
}
