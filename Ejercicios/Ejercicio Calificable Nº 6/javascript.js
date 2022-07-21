//creo 3 variables globales
var foto;
var numserie;
var descripción;

/*SELECT*/
function cambioImagen() {
    //guardo en la variables el elemento con la id "selector"
    let select = document.getElementById('selector');
    //guardo en la variable el valor de la bariable "select"
    let seleccion = select.value;
    //guardo en una variable el elemento "img"
    let imagen = document.querySelector("img");
    //establezco un nuevo atributo a la variable "imagen"
    imagen.setAttribute('src', `img/${seleccion}`);
    foto = seleccion;
}
/*SELECT*/

/*TEXT AREA*/
function activar() {
    //guardo en las variables  los elementos con al id "txta" y "activarta"
    let txta = document.getElementById("txta");
    let bt = document.getElementById("activarta");
    //dependiendo del valor de la variable "bt"
    if (bt.innerText == "Mostrar Descripción") {
        //cambia el valor de la variable
        bt.innerText = "Quitar Descripción";
        //hace visible la variable "txta"
        txta.style.display = "block";
    } else {//si no...
        //cambia el valor de la variable
        bt.innerText = "Mostrar Descripción";
        //hace no visible la variable
        txta.style.display = "none";
    }
}
/*TEXT AREA*/

/*REGLA*/
function validar() {
    //creo una variable con al regla a seguir
    let validarserie = /[0-9]{3}[A-Z]{4}[1-2-A]/;
    //guardo en una variable ele lemento con la id "error"
    var error = document.getElementById("error");
    //guardo en las variables globales los valores de los elementos 
    numserie = document.getElementById("serie").value;
    descripción = document.getElementById("textArea").value;
    //dependiendo de si cumple la variable o no
    if (validarserie.test(numserie)) {
        //imprimo por consola las variables
        console.log(foto + ";" + numserie + ";" + descripción);
        //envio el formulario
        document.forms["formulario"].submit();
    } else {//si no
        //hago no visible el elemento
        error.style.display = "block";
        //cambio el css de los elementos
        document.getElementById("serie").style.border = "1px Solid Red";
        document.getElementById("numserie").style.border = "1px Solid Red";
    }
}
/*REGLA*/

/*QUITAR ERROR*/
function quitarError(){
    //si la variable se encuentra visible
    if(error.style.display=="block"){
        //hago al variable no visible
        error.style.display="none";
        //cambio el css de los elementos 
        document.getElementById("serie").style.border = "1px Solid Black";
        document.getElementById("numserie").style.border = "none";
    }
}
/*QUITAR ERROR*/
    