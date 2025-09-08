let soundfx

function preload() {
    soundfx = loadSound('assets/attack-theme-382730.mp3')
}

function setup() {
    createCanvas(600, 400);
    background(200);

    textSize(32);
    text("Hello, my friend.", 20, 50);
}

function draw(){
    if ( keyIsDown(32) ){
        soundfx.play()
    }
    if ( keyIsDown(DOWN_ARROW) ){
        soundfx.stop()
    }
}