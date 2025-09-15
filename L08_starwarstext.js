let soundfx;
let ypos;

function preload() {
    soundfx = loadSound('assets/attack-theme-382730.mp3');
}

function setup() {
    createCanvas(600, 400);
    background(80);

    ypos = height;
}

function draw() {
    background(80)
    if ( keyIsDown(UP_ARROW) ){
        soundfx.play()
    }
    if ( keyIsDown(DOWN_ARROW) ){
        soundfx.stop()
    }

    translate( width/2, ypos)
    fill("hot pink");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("")
}