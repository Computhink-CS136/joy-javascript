let button1;
let story;
let username;

function setup() {
    createCanvas(600, 600)
    background("pink")

    button1 = createButton("Click on me😀")
    button1.position(350, 100)
    button1.size(110, 50)
    button1.mousePressed(changeText);
    story = 0;

    userInput = createInput(username);
    userInput.position(width/2, height/2 - 110)
    userInput.input(updateName);

    function updateName () {
    username = userInput.value();
}
}

function changeText() {
    story++;
}

function draw() {
    fill("white")
    noStroke()
    rect(100, 150, 430, 80, 30)

    fill("skyblue")

    // story = "AquaBot";
    textSize(30)
    textAlign(CENTER, CENTER)
    text(story, 300, 185)


}