let hiddenwords = ["index", "video", "mouse", "white", "night"];

function setup() {
    createCanvas(1510, 685);
    background("pink");
    textInput = createInput();
    textInput.position(width/2, height/2);
    guessButton = createButton();
    guessButton.position(width/2, height/2);
}

function draw() {
    createCanvas(1510, 685);
    background("pink");

    button1 = createButton("Guess🤔")
    button.position(width/2, height/2)
    button.size(150, 30)
    button.mousePressed(changeText);

    sometextInput = createInput("e.g. a cat");
    sometextInput.position(width/2, height/2 - 260);
}
