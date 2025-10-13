let button1;
let story;

function setup() {
    createCanvas(600, 600)
    background("pink")

    button1 = createButton("Click on me😀")
    button1.position(250, 100)
    button1.size(110, 50)


}

function draw() {
    fill("white")
    noStroke()
    rect(100, 150, 430, 80, 30)

    fill("skyblue")

    story = "AquaBot";
    textSize(30)
    textAlign(CENTER, CENTER)
    text(story, 300, 150)
}