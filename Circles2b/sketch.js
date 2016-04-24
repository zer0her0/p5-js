var circles = [];

function setup() {
  createCanvas (480, 480);
  
  for (var i = 0; i < 50; i++) {
    
    var circle = {
      x: random(width),
      y: random(height),
      r: 64
    };
    circles.push(circle);
    
    for (var i = 0; i < circles.length; i++) {
      fill(255);
      ellipse(circles[i].x, circles[i].y, circles[i].r, circles[i].r);
      while (circles[i].r > 0) {
        circles[i].r = circles[i].r - 10;
        ellipse(circles[i].x, circles[i].y, circles[i].r, circles[i].r);
      }
    }
  }
}

function draw() {
  
}