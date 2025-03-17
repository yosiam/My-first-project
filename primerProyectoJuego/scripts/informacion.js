// var teclaW = document.getElementById("w");
// var teclaA = document.getElementById("a");
// var teclaS = document.getElementById("s");
// var teclaD = document.getElementById("d");

// document.addEventListener("keydown", (evento) => {
//   if (evento.key === "w") {
//     //Activamos el efecto de la tecla W
//     teclaW.classList.add("active");

//     teclaW.style.backgroundColor = "#cccccc";
//     /* Cambia el fondo a gris claro cuando la tecla es presionada */
//     teclaW.style.boxShadow = "0 2px #666666";
//     /* Cambia la sombra a una más pequeña para dar un efecto de presión */
//     teclaW.style.transform = "translateY(2px)"; // Efecto de presionado
//   } else if (evento.key === "a") {
//     //Activamos el efecto de la tecla A
//     teclaA.classList.add("active");

//     teclaA.style.backgroundColor = "#cccccc";
//     /* Cambia el fondo a gris claro cuando la tecla es presionada */
//     teclaA.style.boxShadow = "0 2px #666666";
//     /* Cambia la sombra a una más pequeña para dar un efecto de presión */
//     teclaA.style.transform = "translateY(2px)"; // Efecto de presionado
//   } else if (evento.key === "s") {
//     //Activamos el efecto de la tecla S
//     teclaS.classList.add("active");

//     teclaS.style.backgroundColor = "#cccccc";
//     /* Cambia el fondo a gris claro cuando la tecla es presionada */
//     teclaS.style.boxShadow = "0 2px #666666";
//     /* Cambia la sombra a una más pequeña para dar un efecto de presión */
//     teclaS.style.transform = "translateY(2px)"; // Efecto de presionado
//   } else if (evento.key === "d") {
//     //Activamos el efecto de la tecla D
//     teclaD.classList.add("active");

//     teclaD.style.backgroundColor = "#cccccc";
//     /* Cambia el fondo a gris claro cuando la tecla es presionada */
//     teclaD.style.boxShadow = "0 2px #666666";
//     /* Cambia la sombra a una más pequeña para dar un efecto de presión */
//     teclaD.style.transform = "translateY(2px)"; // Efecto de presionado
//   }
// });

// document.addEventListener("keyup", (evento) => {
//   if (evento.key === "w") {
//     //Desactivamos el efecto de la tecla W
//     teclaW.classList.remove("active");

//     // Establecer la propiedad grid-column
//     teclaW.style.gridColumn = "2 / span 1"; // Ubica el control 'W' en la columna central

//     // Establecer los estilos CSS
//     teclaW.style.cursor = "pointer"; // Cambia el cursor a una mano cuando el usuario pasa sobre la tecla
//     teclaW.style.display = "flex"; // Usa flexbox para organizar el contenido de la tecla
//     teclaW.style.justifyContent = "center"; // Centra horizontalmente el contenido dentro del contenedor
//     teclaW.style.alignItems = "center"; // Centra verticalmente el contenido dentro del contenedor
//     teclaW.style.width = "50px"; // Define un ancho de 50px para la tecla
//     teclaW.style.height = "50px"; // Define una altura de 50px para la tecla
//     teclaW.style.backgroundColor = "#ffffff"; // Color de fondo blanco para la tecla
//     teclaW.style.border = "2px solid #d1d1d1"; // Borde gris claro alrededor de la tecla
//     teclaW.style.borderRadius = "6px"; // Bordes redondeados de 6px para dar un efecto suave
//     teclaW.style.boxShadow = "0 4px #999999"; // Sombra gris para dar un efecto de profundidad
//     teclaW.style.fontSize = "20px"; // Tamaño de fuente de 20px para el texto dentro de la tecla
//     teclaW.style.fontWeight = "bold"; // La fuente es en negrita
//     teclaW.style.color = "#333333"; // El texto tiene un color gris oscuro
//     teclaW.style.textAlign = "center"; // Centra el texto dentro de la tecla
//     teclaW.style.transition = "all 0.2s ease"; // Aplica una transición suave a todos los cambios durante 0.2 segundos
//   } else if (evento.key === "a") {
//     //Desactivamos el efecto de la tecla A
//     teclaA.classList.remove("active");

//     teclaA.style.cursor = "pointer"; // Cambia el cursor a una mano cuando el usuario pasa sobre la tecla
//     teclaA.style.display = "flex"; // Usa flexbox para organizar el contenido de las teclas
//     teclaA.style.justifyContent = "center"; // Centra el contenido horizontalmente dentro de las teclas
//     teclaA.style.alignItems = "center"; // Centra el contenido verticalmente dentro de las teclas
//     teclaA.style.width = "50px"; // Define un ancho de 50px para cada tecla
//     teclaA.style.height = "50px"; // Define una altura de 50px para cada tecla
//     teclaA.style.backgroundColor = "#ffffff"; // El color de fondo es blanco para las teclas
//     teclaA.style.border = "2px solid #d1d1d1"; // El borde es gris claro
//     teclaA.style.borderRadius = "6px"; // Bordes redondeados para suavizar la forma de la tecla
//     teclaA.style.boxShadow = "0 4px #999999"; // Sombra para dar un efecto de profundidad
//     teclaA.style.fontSize = "20px"; // Tamaño de fuente de 20px
//     teclaA.style.fontWeight = "bold"; // La fuente es en negrita
//     teclaA.style.color = "#333333"; // Color gris oscuro para el texto
//     teclaA.style.textAlign = "center"; // El texto está centrado dentro de las teclas
//     teclaA.style.transition = "all 0.2s ease"; // Transición suave de 0.2 segundos
//   } else if (evento.key === "s") {
//     //Desactivamos el efecto de la tecla S
//     teclaS.classList.remove("active");

//     teclaS.style.cursor = "pointer"; // Cambia el cursor a una mano cuando el usuario pasa sobre la tecla
//     teclaS.style.display = "flex"; // Usa flexbox para organizar el contenido de las teclas
//     teclaS.style.justifyContent = "center"; // Centra el contenido horizontalmente dentro de las teclas
//     teclaS.style.alignItems = "center"; // Centra el contenido verticalmente dentro de las teclas
//     teclaS.style.width = "50px"; // Define un ancho de 50px para cada tecla
//     teclaS.style.height = "50px"; // Define una altura de 50px para cada tecla
//     teclaS.style.backgroundColor = "#ffffff"; // El color de fondo es blanco para las teclas
//     teclaS.style.border = "2px solid #d1d1d1"; // El borde es gris claro
//     teclaS.style.borderRadius = "6px"; // Bordes redondeados para suavizar la forma de la tecla
//     teclaS.style.boxShadow = "0 4px #999999"; // Sombra para dar un efecto de profundidad
//     teclaS.style.fontSize = "20px"; // Tamaño de fuente de 20px
//     teclaS.style.fontWeight = "bold"; // La fuente es en negrita
//     teclaS.style.color = "#333333"; // Color gris oscuro para el texto
//     teclaS.style.textAlign = "center"; // El texto está centrado dentro de las teclas
//     teclaS.style.transition = "all 0.2s ease"; // Transición suave de 0.2 segundos
//   } else if (evento.key === "d") {
//     //Desactivamos el efecto de la tecla D
//     teclaD.classList.remove("active");

//     teclaD.style.cursor = "pointer"; // Cambia el cursor a una mano cuando el usuario pasa sobre la tecla
//     teclaD.style.display = "flex"; // Usa flexbox para organizar el contenido de las teclas
//     teclaD.style.justifyContent = "center"; // Centra el contenido horizontalmente dentro de las teclas
//     teclaD.style.alignItems = "center"; // Centra el contenido verticalmente dentro de las teclas
//     teclaD.style.width = "50px"; // Define un ancho de 50px para cada tecla
//     teclaD.style.height = "50px"; // Define una altura de 50px para cada tecla
//     teclaD.style.backgroundColor = "#ffffff"; // El color de fondo es blanco para las teclas
//     teclaD.style.border = "2px solid #d1d1d1"; // El borde es gris claro
//     teclaD.style.borderRadius = "6px"; // Bordes redondeados para suavizar la forma de la tecla
//     teclaD.style.boxShadow = "0 4px #999999"; // Sombra para dar un efecto de profundidad
//     teclaD.style.fontSize = "20px"; // Tamaño de fuente de 20px
//     teclaD.style.fontWeight = "bold"; // La fuente es en negrita
//     teclaD.style.color = "#333333"; // Color gris oscuro para el texto
//     teclaD.style.textAlign = "center"; // El texto está centrado dentro de las teclas
//     teclaD.style.transition = "all 0.2s ease"; // Transición suave de 0.2 segundos
//   }
// });
