let hiddenwords = ["index", "video", "mouse", "white", "night"];

function setup() {
    createCanvas(600, 600);
    background("pink");
}

function draw() {
    createCanvas(1510, 685);
    background("pink");

    
    userInput = createInput(username);
    userInput.position(width/2 - 150, height/2 - 105)
    userInput.input(updateName);

    function updateName () {
    username = userInput.value();

    button1 = createButton("Click on me😀")
    button1.position(width/2, height/2)
    button1.size(150, 30)
    button1.mousePressed(changeText);

    sometextInput = createInput("e.g. a cat");
    sometextInput.position(width/2, height/2 - 260);
}
}