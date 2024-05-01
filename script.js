import { barcelona, roma, paris, londres } from "./ciudades.js";

// obtener elementos del DOM //

let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

// Agregar un evento click //

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", function () {
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    this.classList.add("active");

    let contenido = obtenerContenido(this.textContent);
    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });

  // Agregar al activo //
  // Traer la Info del Objeto Correspondiente y Mostrar Info en el DOM //
});

function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };

  return contenido[enlace];
}
