let bgColor = "pink";
let colorPicker;

function setup() {
    createCanvas(600, 600)
    background("pink")

    colorPicker = createColorPicker();
    colorPicker.position(width/2-30, height/2+200);
}

function draw() {
    background( colorPicker.value() );
    fill("white")
    rect(100, 50, 400, 100, 50)
}