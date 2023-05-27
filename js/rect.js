class CustomRectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.strokeColor = 0; // Color de trazo predeterminado
  }

  display() {
    fill(this.color);
    stroke(this.strokeColor); // Utilizar el color de trazo definido
    rect(this.x, this.y, this.width, this.height);
  }

  setStrokeColor(color) {
    this.strokeColor = color;
  }
}



