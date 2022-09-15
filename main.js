function setup() {
    createCanvas(400, 400);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide();
}

function draw() {
    background(500);
    image(capture, 50, 50, 320, 240);

    circle(40, 40, 20);
    fill(230, 43, 36);

    circle(380, 40, 20);
    fill(39, 23, 69);

    ellipse(40, 280, 55, 65);
    fill(69, 62, 85);

    ellipse(380, 280, 55, 65);
    fill(93, 84, 59);

    rect(60, 40, 300, 40);
    fill(72, 69, 134);

    rect(340, 40, 40, 260);
    fill(72, 69, 134);

    rect(40, 40, 40, 260);
    fill(21, 83, 104);

    rect(60, 280, 300, 20);
    fill(72, 69, 134);
  }