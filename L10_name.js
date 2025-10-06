let bgColor = "pink";
let colorPicker;

let username = "Joy";
let userInput;

function setup() {
    createCanvas(600, 800)
    background(bgColor);

    colorPicker = createColorPicker(bgColor);
    colorPicker.position(width/2, height/2);

    userInput = createInput(username);
    userInput.position(width/2, height/2 - 50)
    userInput.input(updateName);
}
function updateName () {
    username = userInput.value();
}
function draw() {
    background( colorPicker.value() );
    fill("white")
    rect(100, 50, 400, 100, 35)

    fill("black");
    textSize(40);
    textAlign(CENTER,CENTER);
    text(username, 150, 120);

    textAlign(RIGHT,CENTER);
    textSize(20);
    text("Change the colour/换颜色：", width/2, height/2);
    text("Enter your name/写你名字：", width/2, height/2 - 55);
}