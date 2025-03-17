// Obtiene los elementos de correo y contraseña por su ID
var correo = document.getElementById("correo");
var contrasenha = document.getElementById("contrasenha");
var repetirContrasenha = document.getElementById("repetirContrasenha");
const validarCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

function eliminarErrores() {
  errores = document.getElementsByTagName("span");

  for (let error of Array.from(errores)) {
    error.remove();
  }
}

// Función que realiza las validaciones
function validaciones() {
  var validarErrores = true; // Variable para controlar si hay errores

  // Verifica si el campo de correo está vacío
  if (correo.value == "") {
    let error = document.createElement("span"); // Crea un nuevo párrafo para mostrar el error
    error.className = "error";
    error.textContent = "Campo correo electrónico obligatorio"; // Texto del error

    // Inserta el mensaje de error antes del campo de contraseña
    document
      .getElementById("lcontrasenha")
      .parentNode.insertBefore(error, document.getElementById("lcontrasenha"));
    validarErrores = false; // Marca que hay errores
  } else if (!validarCorreo.test(correo.value)) {
    let error = document.createElement("span"); // Crea un nuevo párrafo para mostrar el error
    error.className = "error";
    error.textContent = "Campo correo electrónico inválido"; // Texto del error

    // Inserta el mensaje de error antes del campo de contraseña
    document
      .getElementById("lcontrasenha")
      .parentNode.insertBefore(error, document.getElementById("lcontrasenha"));
    validarErrores = false; // Marca que hay errores
  }

  // Verifica si el campo de contraseña está vacío
  if (contrasenha.value == "") {
    let error = document.createElement("span"); // Crea un nuevo párrafo para mostrar el error
    error.className = "error";
    error.textContent = "Campo contraseña obligatorio"; // Texto del error

    // Inserta el mensaje de error antes del contenedor de botones
    document
      .getElementById("lrepetircontrasenha")
      .parentNode.insertBefore(
        error,
        document.getElementById("lrepetircontrasenha")
      );
    validarErrores = false; // Marca que hay errores
  }

  if (repetirContrasenha.value == "") {
    let error = document.createElement("span"); // Crea un nuevo párrafo para mostrar el error
    error.className = "error";
    error.textContent = "Campo repetir contraseña obligatorio"; // Texto del error

    // Inserta el mensaje de error antes del contenedor de botones
    document
      .getElementById("contenedorBotones")
      .parentNode.insertBefore(
        error,
        document.getElementById("contenedorBotones")
      );
    validarErrores = false; // Marca que hay errores
  }

  return validarErrores; // Devuelve si hay o no errores
}

// Agrega un evento al botón de enviar para ejecutar las validaciones
document.getElementById("enviar").addEventListener("click", () => {
  eliminarErrores();
  if (validaciones()) {
    // Si no hay errores
    var boton = document.getElementById("enviar"); // Obtiene el botón de enviar
    boton.href = "./informacion.html"; // Cambia el enlace del botón para iniciar partida
  }
});
