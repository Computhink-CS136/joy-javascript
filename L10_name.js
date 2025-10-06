let bgColor = "pink";
let colorPicker;

let username = "Joy";
let userInput;

let age = 10;
let ageInput;

function setup() {
    createCanvas(600, 800)
    background(bgColor);

    colorPicker = createColorPicker(bgColor);
    colorPicker.position(width/2, height/2);

    userInput = createInput(username);
    userInput.position(width/2, height/2 - 50)
    userInput.input(updateName);

    ageInput = createInput(username);
    ageInput.position(width/2, height/2 - 50)
    ageInput.input(updateName);
}
function updateName () {
    username = userInput.value();
}
function draw() {
    background( colorPicker.value() );
    fill("white")
    rect(100, 50, 400, 200, 45)

    fill("black");
    textSize(40);
    textAlign( LEFT,CENTER);
    text(username, 150, 100);

    textAlign(RIGHT,CENTER);
    textSize(20);
    text("Change the colour：", width/2, height/2);
    text("Enter your name：", width/2, height/2 - 55);
    text("Enter your age:", width/2 - 10, height/2 - 110);
}