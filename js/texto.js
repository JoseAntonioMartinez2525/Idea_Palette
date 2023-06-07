class CustomTexto {
  constructor(texto, x, y, color) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.strokeColor = color;
  }

  display() {
    stroke(this.strokeColor);
    noFill();
    text(this.texto, this.x, this.y);
  }
  
}

