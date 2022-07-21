//creamos las diferentes  variables que vamos a usar.
//dos variables para el texto que introduzca el usuario.
var usuario = null;
var password = null;
//dos variables que serviran para comporbar si la letra es minus o mayus.
var letras = "abcdefghyjklmnñopqrstuvwxyz";
var mayus = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
//cuatro variables que serviran para comprobar si los datos con correctos.
var tienenumeros = false;
var tieneminus = false;
var tienemayus = false;
var notiene = false;

//Funcion que comprueba si un texto contiene un minuscula y un numero.
function contieneNumyMinus(texto) {
    tienenumeros = false;
    tieneminus = false;
    //bucle que recorre el "texto" carácter a carácter.
    for (let k of texto) {
        //comprueba si el carácter es minuscula(si está dentro de "letras")
        if (letras.indexOf(k) + 1) tieneminus = true
        //comprueba si el carácter es un número
        if (!isNaN(k)) tienenumeros = true;
    }
}
//Funcion que comprueba si un texto contiene una mayusculas
function contieneMayus(texto) {
    tienemayus = false;
    //bucle que recorre el "texto"  carácter a carácter.
    for (let k of texto) {
        //comprueba si el carácter es una mayusculas(si está dentro de "mayus").
        if (mayus.indexOf(k) + 1) tienemayus = true;
    }
}
//Funcion que comprueba si un texto no contiene una letra y un numero
function noContiene(texto) {
    notiene = false;
    tienenumeros = false;
    tieneminus = false;
    tienemayus = false;
    //bucle que recorre el "texto" carácter a carácter.
    for (let k of texto) {
        //ejecutamos las dos funciones pasadonle como parámetro el carácter.
        contieneNumyMinus(k);
        contieneMayus(k);
        //comprueba si las condiciones son correctas
        if (!tieneminus && !tienenumeros && !tienemayus) notiene = true;
    }
}
//Bucle que pregunta al usuario hasta que cumpla las condiciones
do {
    //guardamos como "usuario" lo que escriba el usuario
    usuario = prompt("Introduce tu usuario");
    //ejecutamos la funcion pasandole como parámetro el "usuario"
    contieneNumyMinus(usuario);
    if (!tieneminus || !tienenumeros) alert("El usuario debe tener al maenos una minuscula y un número.");
    else if (usuario==null) { alert("Se ha cancelado el formulario"); break;}
} while (!tieneminus || !tienenumeros)
alert("usuario escrito correctamente");

//Bucle que pregunta la contraseña hasta que cumpla las condiciones
do {
    //guradamos como "password" lo que escriba el usuario
    password = prompt("Introduce tu contraseña")
    //ejecutamos las tres funciones pasandoles como paraemtro la "password"
    noContiene(password);
    contieneNumyMinus(password);
    contieneMayus(password)
    //comprueba los diferentes posibles soluciones al texto de "passsword"
    if (!notiene || !tieneminus || !tienenumeros || !tienemayus) alert("La contraseña debe tener una minuscula,"
     + "un numero, una mayuscula y un carácter que no sea ni letra ni numero.")
    else if (password== null) { alert("Se ha cancelado el formulario"); break;}
} while (!notiene || !tieneminus || !tienenumeros || !tienemayus)
alert("contraseña escrita correctamente");

//Si hemos rrellenado los datos datos correctamente, 
//los mostramos por pantalla
if (usuario != "" && password != "") {
    alert("Todos los datos han sido correctos")
    document.write("Usuario: ", usuario, "<br>")
    document.write("Contraseña: ", password)
}

