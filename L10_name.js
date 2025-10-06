let bgColor = "pink";
let colorPicker;

let username = "Joy";
let userInput;

function setup() {
    createCanvas(600, 800)
    background(bgColor);

    colorPicker = createColorPicker(bgColor);
    colorPicker.position(width/2-35, height/2+250);

    userInput = createInput(username);
    userInput.position(width/2 - 100, height/2)
}

function draw() {
    background( colorPicker.value() );
    fill("white")
    rect(100, 50, 400, 100, 35)

    fill("black")
    text
}