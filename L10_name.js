let bgColor = "pink";
let colorPicker;

function setup() {
    createCanvas(600, 600)
    background("pink")

    colorPicker = createColorPicker();
    colorPicker.position(width/2, height/2)
}

function draw() {
    fill("white")
    rect(100, 50, 400, 100, 50)
}