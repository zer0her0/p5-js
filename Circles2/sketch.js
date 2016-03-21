var circles = [];

function setup() {
  createCanvas (480, 480);
  
  for (var i = 0; i < 50; i++) {
    
    var circle = {
      x: random(width),
      y: random(height),
      r: 32
    };
    circles.push(circle);
    
    for (var i = 0; i < circles.length; i++) {
      fill(255, 0, 150, 100);
      ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
    }
  }
}

function draw() {
  
}