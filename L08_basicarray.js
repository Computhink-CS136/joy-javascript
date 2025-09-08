let soundfx

function preload() {
    soundfx = loadSound('assets/attack-theme-382730.mp3')
}

function setup() {
    createCanvas(600, 400);
    background(80);

    fill("pink")
    textSize(32);
    text("Hello, my friend. Do you feel lucky?", 20, 50);
    text("Do play a card game with me.", 20, 100)
}

function draw(){
    if ( keyIsDown(32) ){
        soundfx.play()
    }
    if ( keyIsDown(DOWN_ARROW) ){
        soundfx.stop()
    }
}