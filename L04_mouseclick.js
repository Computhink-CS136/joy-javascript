// write your codes here

function setup() {
    createCanvas(600, 400);
    background(230);
}

let shapeColor = "pink"

function draw() {
//     let r = 0;
//     let g = 0;
//     let b = 0;
//     let xpos = 50;
//     let ypos = 50;

//     for(let i = 0; i < 6; i++) {
//         fill(r, g, b)
//         g = g + 50
//         circle(xpos, ypos, 50);
//         xpos = xpos + 50;
//         ypos = ypos + 50;
//     }
// noStroke();
// fill(5, 50);
// circle(mouseX, mouseY, 50);

circle(width/2, height/2, 100);

fill (shapeColor);
circle(width/2, height/2, 100)



}
//this must be the last line



function mousePressed() {
    fill("pink");
    
}

function mouseReleased() {
    shapeColor = color(random(255), random(255), random(255))
}