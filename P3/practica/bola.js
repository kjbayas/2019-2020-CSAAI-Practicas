class Bola {
  constructor(ctx) {
    //-- Guardar el contexto de dibujo
    this.ctx = ctx;

    //-- Constante: TamaÃ±o de la bola
    this.size = 5;

    //-- Contante: Posicion inicial de la bola
    this.x_ini = 100;
    this.y_ini = 200;

    //-- Posicion generica de la bola
    this.x = 0;
    this.y = 0;

    //-- Velocidad inicial de la bola
    this.vx_ini = 3;
    this.vy_ini = 3;

    //-- Velocidad genÃ©rica de la bola
    //-- Inicialmente a cero
    this.vx = 0;
    this.vy = 0;

    //-- Inicializar
    this.init();
  }

  draw() {
    //----- Dibujar la Bola
    this.ctx.beginPath();
    this.ctx.fillStyle='white';
    //-- x,y, anchura, altura
    //arc para hacer redonda la bola
    this.ctx.arc(this.x, this.y, this.size,0,2*Math.PI);
    this.ctx.fill();
  }

  init() {
    //-- Inicializa la bola: A su posicion inicial
    this.x = this.x_ini;
    this.y = this.y_ini;
    this.vx = 0;
    this.vy = 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
}
