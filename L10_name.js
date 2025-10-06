let bgColor = "pink";
let colorPicker;

let username = "Kobi";
let userInput;

function setup() {
    createCanvas(600, 600)
    background(bgColor);

    colorPicker = createColorPicker(bgColor);
    colorPicker.position(width/2-25, height/2+250);

    userInput = createInput(username);
    userInput.position()
}

function draw() {
    background( colorPicker.value() );
    fill("white")
    rect(100, 50, 400, 100, 35)
}