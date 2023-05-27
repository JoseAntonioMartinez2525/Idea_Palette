<<<<<<< HEAD
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
=======
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
>>>>>>> 409f79b9e60f36ef26371eae73d5951fb5de3351
}