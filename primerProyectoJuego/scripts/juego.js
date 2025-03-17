var configuracion = {
  type: Phaser.AUTO,
  // Tamaño de la pantalla que ocupará el juego
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  // Creamos la propiedad escena que tendrá un objeto
  scene: {
    // Metemos todo lo que va a cargar antes de iniciar el juego
    preload: preload,
    // Añadir los distintos objetos plataformas, objetos etc...
    create: create,
    // Se actualiza a tiempo real para saber que hace el jugador
    update: update,
  },
};

var juego = new Phaser.Game(configuracion);

// Cargamos las imágenes en esta función
function preload() {
  this.load.image("background", "../media/img/fondoJuego.png");
  this.load.spritesheet("personaje", "../media/img/PersonajeMagoDoFogo.png", {
    frameWidth: 110,
    frameHeight: 128,
  });
  this.load.image("projectileSprite", "../media/img/disparoMagoFuego.png");
}

// Creamos las imágenes cargadas en la anterior función
function create() {
  // Añade la imagen y ajústala al tamaño de la pantalla
  let mapa = this.add.image(0, 0, "background").setOrigin(0, 0);

  // Añadimos el personaje y habilitamos física
  this.jugador = this.physics.add.sprite(
    //Aquí creamos al personaje en el centro de la ventana del usuario
    this.cameras.main.width / 2,
    this.cameras.main.height / 2,
    "personaje"
  );

  // Hacer que el personaje colisione con los límites del mundo.
  this.jugador.setCollideWorldBounds(true);

  // Configurar los controles del teclado.
  this.cursor = this.input.keyboard.createCursorKeys();

  // Crear un grupo para los proyectiles.
  this.projectiles = this.physics.add.group();

  // Definir una función para disparar proyectiles desde la posición del jugador.
  this.shootProjectile = function () {
    var projectile = this.projectiles.create(
      this.jugador.x,
      this.jugador.y,
      "projectileSprite"
    );
    projectile.setVelocity(200, 0); // Ajusta la velocidad del proyectil según sea necesario.
  }.bind(this);
}

function update() {
  // Restablece la velocidad del personaje a 0 en ambas direcciones (horizontal y vertical).
  this.jugador.setVelocity(0);

  //Mapear las teclas
  this.wKeyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  this.wKeyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  this.wKeyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  this.wKeyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

  // Verifica si la tecla A está presionada
  if (this.wKeyA.isDown) {
    // Si está presionada, establece la velocidad horizontal (X) del personaje a -200
    // Esto mueve al personaje hacia la izquierda
    this.jugador.setVelocityX(-200);
  }
  // Si la tecla de la flecha derecha está presionada
  else if (this.wKeyD.isDown) {
    // Establece la velocidad horizontal (X) del personaje a 200
    // Esto mueve al personaje hacia la derecha
    this.jugador.setVelocityX(200);
  }

  // Verifica si la tecla de la flecha arriba está presionada
  if (this.wKeyW.isDown) {
    // Si está presionada, establece la velocidad vertical (Y) del personaje a -200
    // Esto mueve al personaje hacia arriba
    this.jugador.setVelocityY(-200);
  }
  // Si la tecla de la flecha abajo está presionada
  else if (this.wKeyS.isDown) {
    // Establece la velocidad vertical (Y) del personaje a 200
    // Esto mueve al personaje hacia abajo
    this.jugador.setVelocityY(200);
  }

  // Asignar la función de disparo a una tecla, por ejemplo, la barra espaciadora
  this.input.on("pointerdown", this.shootProjectile, this);
}
