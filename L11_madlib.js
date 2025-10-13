let button1;
let story;
// let username;
let sometextInput;
let text;


function setup() {
    createCanvas(600, 600)
    background("pink")

    button1 = createButton("Click on me😀")
    button1.position(250, 300)
    button1.size(150, 30)
    button1.mousePressed(changeText);
    // story = 0;

    // userInput = createInput(username);
    // userInput.position(width/2 - 150, height/2 - 105)
    // userInput.input(updateName);

    // function updateName () {
    // username = userInput.value();

    sometextInput = createInput("e.g. a cat");
    sometextInput.position(width/2, height/2 - 260);
    sometextInput = createInput("e.g. play");
    sometextInput.position(width/2, height/2 - 210);
    sometextInput = createInput("e.g. happy");
    sometextInput.position(width/2, height/2 - 160);
    sometextInput = createInput("e.g. happily");
    sometextInput.position(width/2, height/2 - 110);
    sometextInput = createInput("e.g. house");
    sometextInput.position(width/2, height/2 - 60);
}

text("Enter noun:")
function changeText() {
    // story++;
    story = sometextInput.value();

}

function draw() {
    fill("white")
    noStroke()
    rect(100, 400, 430, 150, 50)

    fill("skyblue")

    // story = "AquaBot";
    textSize(30)
    textAlign(CENTER, LEFT)
    text(story, 300, 335)


}