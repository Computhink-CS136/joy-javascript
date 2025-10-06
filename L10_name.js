let bgColor = "pink";
let colorPicker;

// let username;
let username = "Joy";
let userInput;

// let age;
let age = 10;
let ageInput;

let birth;
let birthInput;

function setup() {
    createCanvas(600, 800)
    background(bgColor);

    colorPicker = createColorPicker(bgColor);
    colorPicker.position(width/2, height/2 + 55);

    userInput = createInput(username);
    userInput.position(width/2, height/2 - 110)
    userInput.input(updateName);

    ageInput = createInput(age);
    ageInput.position(width/2, height/2 - 50);
    ageInput.input(updateAge);

    birthInput = createInput(birth, "date"); //date, time, text, number, password
    birthInput.position(width/2, height/2 + 5);
    birthInput.input(updateBirth);
}
function updateName () {
    username = userInput.value();
}
function updateAge () {
    age = ageInput.value();
}
function updateBirth () {
    birth = birthInput.value();
}
function draw() {
    background( colorPicker.value() );
    fill("white")
    rect(100, 50, 400, 200, 45)

    fill("black");
    textSize(40);
    textAlign( LEFT,CENTER);
    text(username, 150, 100);
    text(age, 150, 180)

    textAlign(RIGHT,CENTER);
    textSize(20);
    text("Change the colour：", width/2, height/2 + 55);
    text("Enter your name：", width/2, height/2 - 110);
    text("Enter your age:", width/2 - 10, height/2 - 55);
    text("Enter your date of birth:", width/2, height/2 + 10);
}