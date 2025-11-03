let hiddenwords = ["index", "video", "mouse", "white", "night"];

function setup() {
    createCanvas(1510, 685);
    background("pink");
  
    textInput = createInput();
    textInput.position(width/2 - 200, height/2 + 5);
    textInput.style("font-size", "20px")
   .style("border", "1px teal")   guessButton = createButton("Guess");
    guessButton.position(width/2 + 100, height/2);
    guessButton.style("font-size", "20px")
}

function draw() {
    createCanvas(1510, 685);
    background("pink");
    textAlign(CENTER, CENTER)
    textSize(30);
    text("Guess the hidden 5-letter word!", width/2, 100);
    text("Attempts : 0", width/2, 150);
    text("Hints: I _ _ E _", width/2, 200)
}
    // button = createButton("Guess🤔")
    // button.position(width/2, height/2)
    // button.size(150, 30)
    // button.mousePressed(changeText);

    // sometextInput = createInput("e.g. a cat");
    // sometextInput.position(width/2, height/2 - 260);