console.log("Ejecutando JS...");

display = document.getElementById("display")
//boton1 = document.getElementById("boton1")
//boton2 = document.getElementById("boton2")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")
// al cargarnos los botones creo un array para llamar a todos los botones
let digitos = document.getElementsByClassName("cdigitos");
 for (i = 0; i < digitos.length; i++) {
   digitos[i].onclick=(ev)=>{
     digito(ev.target);
   }
 }
//vamos ha crear una funcion para no repetir codigo
function digito(boton){
  if(display.innerHTML=="0"){
    display.innerHTML= boton.value;
  }else {
    display.innerHTML += boton.value;

  }
}
suma.onclick = () => {
  display.innerHTML += "+";
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}


// -- Insertar digito 1
//boton1.onclick = (ev) => {
  //digito(ev.target);
  //Esto es para optimizar el codigo de abajo llamando directamente a la funcion digito
  //digito(boton1);
//  display.innerHTML += "1";
//elimino los numeros imaginarios y le asigno un valor en html
  //if(display.innerHTML=="0"){
    //display.innerHTML= boton1.value;
  //}else {
    //display.innerHTML += boton1.value;
// }
//}

//-- Insertar digito 2
//vamos ha llamr a un evento para hacer una mejora
//boton2.onclick = (ev) => {
//  digito(ev.target);;// ev.target tiene como finalidad cuando seleccionas un boton te da el valor que tenia ese valor
  //display.innerHTML += boton2.value;
//}

//-- Insertar simbolo de sumar
