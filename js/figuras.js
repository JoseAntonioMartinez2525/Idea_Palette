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



class CustomLine {
  constructor(x1, y1, x2, y2, color) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.strokeColor = color; // Establecer el color del contorno de la nueva línea
  }

  display() {
    stroke(this.strokeColor); // Aplicar el color del contorno
    line(this.x1, this.y1, this.x2, this.y2);
  }
}
