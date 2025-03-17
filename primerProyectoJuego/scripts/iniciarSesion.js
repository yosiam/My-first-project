// Obtiene los elementos de correo y contraseña por su ID
var correo = document.getElementById("correo");
var contrasenha = document.getElementById("contrasenha");

// Expresión regular para validar el formato del correo electrónico
const validarCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Función para eliminar errores existentes
function eliminarErrores() {
  // Selecciona todos los elementos con la clase "error"
  let errores = document.querySelectorAll(".error");

  // Elimina cada error encontrado
  errores.forEach((error) => error.remove());
}

// Función que realiza las validaciones
function validaciones() {
  var validarErrores = true; // Variable para controlar si hay errores

  eliminarErrores(); // Elimina errores antes de volver a validar

  // Verifica si el campo de correo está vacío
  if (correo.value === "") {
    let error = document.createElement("span"); // Crea un nuevo span para mostrar el error
    error.className = "error";
    error.textContent = "Campo correo electrónico obligatorio"; // Texto del error

    // Inserta el mensaje de error antes del campo de contraseña
    document
      .getElementById("lcontrasenha")
      .parentNode.insertBefore(error, document.getElementById("lcontrasenha"));
    validarErrores = false; // Marca que hay errores
  } else if (!validarCorreo.test(correo.value)) {
    let error = document.createElement("span"); // Crea un nuevo span para mostrar el error
    error.className = "error";
    error.textContent = "Campo correo electrónico inválido"; // Texto del error

    // Inserta el mensaje de error antes del campo de contraseña
    document
      .getElementById("lcontrasenha")
      .parentNode.insertBefore(error, document.getElementById("lcontrasenha"));
    validarErrores = false; // Marca que hay errores
  }

  // Verifica si el campo de contraseña está vacío
  if (contrasenha.value === "") {
    let error = document.createElement("span"); // Crea un nuevo span para mostrar el error
    error.className = "error";
    error.textContent = "Campo contraseña obligatorio"; // Texto del error

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

// Fetch para obtener datos de usuarios del archivo JSON
fetch("../data/usuarios.json")
  .then((respuesta) => {
    if (!respuesta.ok) {
      // Si la respuesta no es válida, lanza un error
      throw new Error("Error, no se pudo conectar con el JSON");
    }
    // Si la respuesta es válida, la convierte a formato JSON
    return respuesta.json();
  })
  .then((usuarios) => {
    // Agrega un evento al botón de enviar para ejecutar las validaciones
    document.getElementById("enviar").addEventListener("click", () => {
      //Variables
      var formulario = document.getElementById("formulario");

      eliminarErrores(); // Elimina errores antes de validar

      if (validaciones()) {
        // Verifica si el correo y contraseña ingresados están en el JSON
        // El método .some es una función de los arrays en JavaScript que comprueba si al menos uno de los elementos en el array cumple con una condición especificada
        let correoValido = usuarios.some(
          (user) => user.correo === correo.value
        );
        let contrasenhaValida = usuarios.some(
          (user) => user.contrasenha === contrasenha.value
        );

        //Validación correo dentro del JSON
        if (!correoValido) {
          let error = document.createElement("span"); // Crea un nuevo span para mostrar el error
          error.className = "error";
          error.textContent = "Correo inexistente"; // Texto del error
          document
            .getElementById("lcontrasenha")
            .parentNode.insertBefore(
              error,
              document.getElementById("lcontrasenha")
            );
          formulario.action = "../html/inicioSesion.html"; // Redirige a la página de inicio de sesión si hay errores

          //Validación contraseña dentro del JSON
        } else if (!contrasenhaValida) {
          let error = document.createElement("span"); // Crea un nuevo span para mostrar el error
          error.className = "error";
          error.textContent = "Contraseña incorrecta"; // Texto del error
          document
            .getElementById("contenedorBotones")
            .parentNode.insertBefore(
              error,
              document.getElementById("contenedorBotones")
            );
          formulario.action = "../html/inicioSesion.html"; // Redirige a la página de inicio de sesión si hay errores
        } else {
          formulario.action = "../html/iniciarPartida.html"; // Redirige a la página de iniciar partida si todo es válido
          formulario.submit();
        }
      }
    });
  })
  .catch((error) => console.error(error)); // Muestra errores en la consola
