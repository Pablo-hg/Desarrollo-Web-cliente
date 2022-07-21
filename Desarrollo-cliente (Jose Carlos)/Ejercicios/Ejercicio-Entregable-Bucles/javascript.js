//RANDOM SEMILLA
//Creamos las variables para la función
var seed = 777666777;
var modulo = 2**32;
var a = 1664225;
var c = 1013904233;
//Creamos la funcion que nos devuelve un numero aleatorio
function getRamdom(){
    var returnval = seed/modulo;
    seed = (a* seed + c) % modulo;
    return returnval;
}
//JUEGO DE ADIVINAR EL NUMERO
//Creamos las variables para el juego
var numeroescrito = null;
var numeroadivinar = Math.round(getRamdom() * 500 +1);
var intentos = 0;
var volverajugar = null;
//Creamos un bucle que pregunte hasta que acertemos
do{
    //Guardamos lo que escriba el usuario en una variable
    numeroescrito = prompt("Escribe un numero entre el 1 y al 100 : ")
    //Dependiendo del numero o del tipo de dato que introduzca , hara una cosa u
    if(isNaN(numeroescrito)){alert("Debes escribir en formato numerico");} 
    else if (numeroescrito == null){alert("Se ha cancelado el juego");break;}
    else if (numeroescrito < numeroadivinar){alert("El numero que has introducido es menor al numero a adivinar");intentos++;}
    else if (numeroescrito > numeroadivinar){alert("El numero que has introducido es mayor al numero a adivinar");intentos++;}
    else if (numeroescrito == numeroadivinar){alert("¡Enhorabuena, acertaste con " + intentos + " intentos!");}
} while (numeroadivinar!=numeroescrito);
//Al salir, preguntamos si queremos jugar, si es que si, recargamos la pagina
var volverajugar = confirm("¿Quieres volver a jugar?");if(volverajugar){location.reload();}else window.close();