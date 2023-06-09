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
  
    getParams() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      strokeColor: this.strokeColor
    };
  }
}

