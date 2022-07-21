
//Creamo el array de las claves
var claves = ["a", "b", "c"];
//creamos el array de los valores
var valores = [1, 5, 9];
//Creamos la variable "solucion" indicando que es un nuevo "Map"
let solucion = new Map();
//Hacemos un bucle que establece un nueva clave y valor al mapa con cada vuelta
//y con cada vuelta, avazamos en "1"a la posicion de los arrays
for (var i = 0; i < 3; i++) {
    solucion.set(claves[i], valores[i]);
}
//Imprimimos por consola el "mapa"
console.log(solucion);