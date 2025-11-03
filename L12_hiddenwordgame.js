let hiddenwords = ["index", "video", "mouse", "white", "night"];

function setup() {
    createCanvas(600, 600);
    background("pink");
}

function draw() {
    createCanvas(1500, 690);
    background("pink");

    button1 = createButton("Click on me😀")
    button1.position(250, 300)
    button1.size(150, 30)
    button1.mousePressed(changeText);

    sometextInput = createInput("e.g. a cat");
    sometextInput.position(width/2, height/2 - 260);
}