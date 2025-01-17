

float x = 150;
float y = 100;
float xSpeed = 5;
float ySpeed = 4;

void setup() {
  size(300, 300);
}

void draw() {
  background(64);
  ellipse(x, y, 25, 25);

  x += xSpeed;
  y += ySpeed;
  
  if (x < 0 || x > width) {
    xSpeed *= -1;
  }

  if (y < 0  || y > height) {
    ySpeed *= -1;
  }
}