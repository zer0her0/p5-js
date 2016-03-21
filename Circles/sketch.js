function setup() {
  createCanvas (480, 480);
  
  for (var i = 0; i < 50; i++) {
    var x =  random(width);
    var y = random(height);
    var r = 48;
    fill(255, 0, 150, 100);
    ellipse(x, y, r*2, r*2);
  }
}

function draw() {
  
}