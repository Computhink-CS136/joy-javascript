let hiddenwords = ["index", "video", "mouse", "white", "night"];

function setup() {
    createCanvas(1510, 685);
    background("pink");
    textInput = createInput();
    textInput.position(width/2, height/2);
    guess
}

function draw() {
    createCanvas(1510, 685);
    background("pink");

    button1 = createButton("Guess🤔")
    button1.position(width/2, height/2)
    button1.size(150, 30)
    button1.mousePressed(changeText);

    sometextInput = createInput("e.g. a cat");
    sometextInput.position(width/2, height/2 - 260);
}
