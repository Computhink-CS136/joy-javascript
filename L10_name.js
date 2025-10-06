let bgColor = "pink";
let colorPicker;

function setup() {
    createCanvas(600, 600)
    background()

    colorPicker = createColorPicker();
    colorPicker.position(width/2-25, height/2+250);
}

function draw() {
    background( colorPicker.value() );
    fill("white")
    rect(100, 50, 400, 100, 35)
}