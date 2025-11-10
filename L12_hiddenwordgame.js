let hiddenwords = ["index", "video", "mouse", "white", "night"];

let textInput;
let guessButton;

let message;
let selected;
let hints;

function setup() {
    createCanvas(1510, 685);
    background("pink");

    textInput = createInput();
    textInput.position(width/2 - 200, height/2 + 5);
    textInput.style("font-size", "20px")
    textInput.style("background-color", "skyblue")

    guessButton = createButton("Guess");
    guessButton.position(width/2 + 100, height/2);
    guessButton.style("font-size", "20px")
    guessButton.style("background-color", "skyblue")
    guessButton.mousePressed(checkAnswer);

    // button1 = createButton("SUBSCRIBE!");
    // button1.position(width/2 - 70, height/2 + 200);
    // button1.style("font-size", "20px")
    // button1.style("background-color", "red")

    selected = random(hiddenwords);
    selected = selected.toUpperCase();
    generateHints();
}
function generateHints() {
    hints = selected[0] + " " + "_ ".repeat(selected.length-1);
}

function checkAnswer() {
    let userInput = textInput.value().toUpperCase();

    if (userInput === selected){
        message = "Guessed right! The hidden word is " + selected + "!";
    }
    else {
        let foundletters = " ";
        for (let index = 0; index < selected.length; index++) {
            if (selected[index] === userInput[index]) {
                foundletter
            }
        }
        message = "Sorry - Your answer is wrong:("
    }
}

function draw() {
    createCanvas(1510, 685);
    background("pink");

    fill("black");
    textAlign(CENTER, CENTER)
    textSize(30);

    text("Guess the hidden 5-letter word!", width/2, 100);
    text("Attempts : 0", width/2, 150);
    text("Hints: "+hints, width/2, 200)
    // text("Subscribe to 'joy_penguin@codewhiz'!", width/2, height/2 + 150)

    fill("silver");
    textSize(24);
    text(message, width/2, height/2 + 100);
}
    // button = createButton("Guess🤔")
    // button.position(width/2, height/2)
    // button.size(150, 30)
    // button.mousePressed(changeText);

    // sometextInput = createInput("e.g. a cat");
    // sometextInput.position(width/2, height/2 - 260);