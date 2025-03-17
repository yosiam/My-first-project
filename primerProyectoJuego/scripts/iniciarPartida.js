// Realiza una solicitud para obtener el archivo JSON con los personajes
fetch("../data/personajes.json")
  .then((respuesta) => {
    // Verifica si la respuesta es válida
    if (respuesta) {
      // Convierte la respuesta a formato JSON
      return respuesta.json();
    } else {
      // Lanza un error si no se pudo obtener la respuesta
      throw new Error("Error, no se pudo conectar con el JSON");
    }
  })
  .then((respuesta) => {
    // Recorre cada personaje en la respuesta JSON
    respuesta.forEach((personajes) => {
      // Obtiene el elemento <select> del DOM
      var selector = document.getElementById("selectorMago");
      // Crea una nueva opción para el <select>
      var opcion = document.createElement("option");
      // Obtiene el elemento <fieldset> del DOM
      var fieldset = document.getElementById("fieldset");

      // Asigna el valor y el texto de la opción basados en el personaje
      opcion.value = personajes.mago;
      opcion.textContent = personajes.mago;

      // Agrega la opción al <select>
      selector.appendChild(opcion);

      // Agrega un event listener al <select> para manejar cambios
      selector.addEventListener("change", () => {
        // Verifica si el valor seleccionado coincide con el del personaje actual
        if (selector.value == personajes.mago) {
          // Crea y configura un elemento <p> para la vida del personaje
          var vida = document.createElement("p");
          vida.value = personajes.vida;
          vida.textContent = "Vida:" + " " + personajes.vida;
          vida.id = "vida";

          // Crea y configura un elemento <p> para la defensa del personaje
          var defensa = document.createElement("p");
          defensa.value = personajes.defensa;
          defensa.textContent = "Defensa:" + " " + personajes.defensa;
          defensa.id = "defensa";

          // Crea y configura un elemento <p> para el ataque del personaje
          var ataque = document.createElement("p");
          ataque.value = personajes.ataque;
          ataque.textContent = "Ataque:" + " " + personajes.ataque;
          ataque.id = "ataque";

          // Crea y configura un elemento <p> para la velocidad del personaje
          var velocidad = document.createElement("p");
          velocidad.value = personajes.velocidad;
          velocidad.textContent = "Velocidad:" + " " + personajes.velocidad;
          velocidad.id = "velocidad";

          // Crea y configura un elemento <p> para la velocidad de ataque del personaje
          var velocidadAtaque = document.createElement("p");
          velocidadAtaque.value = personajes.velocidadAtaque;
          velocidadAtaque.textContent =
            "Velocidad Ataque:" + " " + personajes.velocidadAtaque;
          velocidadAtaque.id = "velocidadAtaque";

          // Agrega todos los elementos <p> creados al fieldset
          fieldset.appendChild(vida);
          fieldset.appendChild(defensa);
          fieldset.appendChild(ataque);
          fieldset.appendChild(velocidad);
          fieldset.appendChild(velocidadAtaque);

          // Verifica si el fieldset tiene elementos hijos y los elimina si es así
          if (fieldset.hasChildNodes) {
            document.getElementById("vida").remove();
            document.getElementById("defensa").remove();
            document.getElementById("ataque").remove();
            document.getElementById("velocidad").remove();
            document.getElementById("velocidadAtaque").remove();

            // Vuelve a agregar los elementos <p> creados al fieldset
            fieldset.appendChild(vida);
            fieldset.appendChild(defensa);
            fieldset.appendChild(ataque);
            fieldset.appendChild(velocidad);
            fieldset.appendChild(velocidadAtaque);
          }
        }
      });
    });
  });
