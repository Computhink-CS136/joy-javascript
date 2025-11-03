let hiddenwords = ["index", "video", "mouse", "white", "night"];

function setup() {
    createCanvas(600, 600);
    background("pink");
}

function draw() {
    sometextInput = createInput("e.g. a cat");
    sometextInput.position(width/2, height/2 - 260);
}