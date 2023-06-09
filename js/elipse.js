class CustomEllipse {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.width, this.height);
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
