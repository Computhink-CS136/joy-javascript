let button1;
function setup() {
    createCanvas(600, 400)
    background("pink")

    button1 = createButton("Click on me😀")
    button1.position(250, 200)
    button1.size(110, 50)


}

function draw() {
    fill("gray")
    rect(100, 250, 500, 80, 30)
}