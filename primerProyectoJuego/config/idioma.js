export class Configuracion {
  constructor() {
    // Comprobamos si ya existe una instancia (la propiedad instancia está definida)
    if (Configuracion.instancia) {
      return Configuracion.instancia; // Devolvemos la instancia existente
    } else {
      this.config = {}; // Inicializamos la propiedad "config"
      Configuracion.instancia = this; // Inicializamos la propiedad estática "instancia" referenciando el propio objeto "Configuracion"
    }
  }

  // Este método establece el valor de una propiedad del objeto "config" pasando tanto el nombre de la propiedad (clave) como el nuevo valor (valor)
  establecer(clave, valor) {
    this.config[clave] = valor; // Asigna el nuevo valor a la clave especificada en "config"
    localStorage.setItem("idioma", JSON.stringify(this.config)); // Guarda el objeto "config" en el almacenamiento local como una cadena JSON
  }

  // Este método devuelve el valor de una propiedad de "config" a partir del nombre de la misma (clave)
  obtener(clave) {
    return this.config[clave]; // Devuelve el valor asociado a la clave especificada en "config"
  }
}
