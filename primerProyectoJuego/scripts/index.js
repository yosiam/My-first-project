// Importa la clase Configuracion desde el archivo "../config/idioma.js"
import { Configuracion } from "../config/idioma.js";

// Variables
var idiomaPagina = document.getElementById("seleccionIdioma"); // Selecciona el elemento del DOM con el ID "seleccionIdioma"
var volumenAudios = document.getElementById("volumenPagina"); // Selecciona el elemento del DOM con el ID "volumenPagina"
var audio = document.getElementById("background-music"); // Selecciona el elemento del DOM con el ID "background-music"
var contador = 1; // Inicializa una variable contador con el valor 1

/* Asegura que el código JavaScript se ejecute solo después de que la página haya cargado completamente.*/
document.addEventListener("DOMContentLoaded", function () {
  var config = new Configuracion(); // Crea una nueva instancia de la clase Configuracion

  // Decimos que si la configuración está vacía le damos un valor predeterminado
  if (config == "") {
    config.establecer("idioma", "espanhol");
  }

  var idiomaGuardado = localStorage.getItem("idioma"); // Obtiene el idioma guardado en el almacenamiento local
  var idiomaObjeto = JSON.parse(idiomaGuardado); // Convierte la cadena JSON del idioma guardado en un objeto
  var idioma = idiomaObjeto.idioma; // Extrae el valor del idioma del objeto

  // Verifica si el idioma guardado es "espanhol" y, si es así, selecciona esa opción en el elemento "idiomaPagina"
  if (idioma == "espanhol") {
    idiomaPagina.value = "espanhol";
    idiomaPagina.selected = true;
  }

  // Verifica si el idioma guardado es "ingles" y, si es así, selecciona esa opción en el elemento "idiomaPagina"
  if (idioma == "ingles") {
    idiomaPagina.value = "ingles";
    idiomaPagina.selected = true;
  }

  // Agrega un evento de cambio al elemento "idiomaPagina" que se ejecuta cuando el usuario selecciona un nuevo idioma
  idiomaPagina.addEventListener("change", (evento) => {
    evento.preventDefault(); // Previene el comportamiento por defecto del evento

    var idiomaSeleccionado = evento.target.value; // Obtiene el valor del idioma seleccionado por el usuario
    config.establecer("idioma", idiomaSeleccionado); // Llama al método "establecer" de la clase Configuracion para guardar el nuevo idioma
  });
});

volumenAudios.addEventListener("click", () => {
  contador++; // Incrementa el contador cada vez que se hace clic en el control de volumen

  if (contador % 2 == 0) {
    audio.pause(); // Pausa el audio si el contador es par
  } else {
    audio.play(); // Reproduce el audio si el contador es impar
  }
});
