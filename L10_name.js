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
    textAlign(LEFT_CENTER)
    text(username, 150, 120);

    textAlign(RIGHT_CENTER);
    textSize(20);
    text("Change colour/换颜色：", width/2, height/2 + 70);
    text("Enter name/写你的名字：", width/2, height/2 + 82);
}