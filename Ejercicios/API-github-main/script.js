//guardo en una variable la api de github de usuarios
const APIURL = "https://api.github.com/users/";
//guardo en variables las etiquetas del html
const main = document.getElementById("main");
const form = document.getElementById("form");
const buscador = document.getElementById("buscador");

//recojo un usuario por defecto(el mio)
getUsuario("Pablo-hg");

//declaro una funcion asincrona para los datos del usuario(se ejecuta a la vez)
async function getUsuario(usuario) {
    //guardamos en una variable el usuario a buscar (la direccion)
    const resp = await fetch(APIURL + usuario);
    //guardo en una variable el json obtenido del usuario
    const respData = await resp.json();
    // await --> solo se puede usar dentro de una funcion asincrona --> espera a que fetch se carge
    // fetch() --> recibe un argumento obligatorio --> la ruta de acceso del recurso a recuperar
    //fetch proporciona una interfaz para recuperar recursos

    //ejecutamos la funcion de crear la carta, pasandole el usuario obtenido
    crearCartaUsuario(respData);

    //ejecutamos la funcion que recupera los repositorios del usuario que el pasemos
    getRepositorio(usuario);
}

//declaro una funcion asincrona para recuperar los repositorios del usuario(se ejecuta a la vez)
async function getRepositorio(usuario) {
    //guardamos en una variable el repositorio del usuario(la direccion)
    const resp = await fetch(APIURL + usuario + "/repos");
    //guardo en una variable el json obtenido del usuario
    const respData = await resp.json();
    //ejecutamos la funcion que añade los repositorios a la carta
    añadirRepoCarta(respData);
    //imprimimos por consola el json
    console.log(respData);
}

//Funcion que crea la carta del usuario
function crearCartaUsuario(usuario) {
    //guardamos en una varibale el codigo html de la carta recuperamos los datos
    const cartaHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${usuario.avatar_url}" alt="${usuario.name}" />
            </div>
            <div class="user-info">
                <h2>${usuario.name}</h2>${usuario.login}
                <p>${usuario.bio}</p>
                <ul class="info">
                    <li><strong>${usuario.followers}</strong>&nbsp Seguidores</li>
                    <li><strong>${usuario.following}</strong>&nbsp Siguiendo</li>
                    <li><strong>${usuario.public_repos}</strong>&nbsp Repositorios</li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `;
    //escribimos en el main el texto que contenga cartaHTML
    main.innerHTML = cartaHTML;
}

//Funcion que añade los repositorios a la carta
function añadirRepoCarta(repositorio) {
    //guardamos en una variable la clase "repos" del html
    const reposEl = document.getElementById("repos");
    repositorio
        //ordenamos la lista de mayor a menor(tamaño)
        .sort((a, b) => b.size - a.size)
        //guardamos (al menos) los repositorios en un array de 10 elementos
        .slice(0, 10)
        //por cada repositorio
        .forEach((repo) => {
            //guardamos en una variable la nueva etiqueta "a"
            const repoEl = document.createElement("a");
            //añadimos a la clase "repo" la nueva etiqueta "a"
            repoEl.classList.add("repo");
            //añadimos que la direccion sea direccion de dicho repositorio
            repoEl.href = repo.html_url;
            //añadimos que como target sea una pestaña nueva
            repoEl.target = "_blank";
            //añadimos como texto el nombre del repositorio
            repoEl.innerText = repo.name;
            //añadimos los nuevos datos sean hijos de la variable reposEl(atributos de la etiqueta "repos")
            reposEl.appendChild(repoEl);
        });
}

//creamos una funcion que al escuchar un cambio en el buscador,
//vuelva a ejecutar la funcion de obetner los datos del usuario que le apsemos 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //guardamos en una variable el contenido del buscador
    const usuario = buscador.value;
    //dependiendo del contenido
    if (usuario) {
        //recuperamos los datos del usuario recibido
        getUsuario(usuario);
        //dejamos el texto vacio
        buscador.value = "";
    }
});
