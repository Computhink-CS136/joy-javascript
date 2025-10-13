let button1;
let story;
// let username;
let sometextInput;


function setup() {
    createCanvas(600, 600)
    background("pink")

    button1 = createButton("Click on me😀")
    button1.position(350, 190)
    button1.size(150, 30)
    button1.mousePressed(changeText);
    // story = 0;

    // userInput = createInput(username);
    // userInput.position(width/2 - 150, height/2 - 105)
    // userInput.input(updateName);

    // function updateName () {
    // username = userInput.value();

    sometextInput = createInput("e.g. a cat");
    sometextInput.position(width/2 - 150, height/2 - 105);
}


function changeText() {
    // story++;
    story = sometextInput.value();
}

function draw() {
    fill("white")
    noStroke()
    rect(100, 300, 430, 80, 30)

    fill("skyblue")

    // story = "AquaBot";
    textSize(30)
    textAlign(CENTER, CENTER)
    text(story, 300, 335)


}