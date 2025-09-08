let soundfx

function preload() {
    soundfx = loadSound('assets/attack-theme-382730.mp3')
}

function setup() {
    createCanvas(600, 400);
    background(80);

    fill("pink")
    textSize(32);
    text("Hello.Bot1806j activated.", 20, 50);
    text("What do you want to do?", 20, 100)
    text("Choose:")
    text()
}

function draw(){
    if ( keyIsDown(32) ){
        soundfx.play()
    }
    if ( keyIsDown(DOWN_ARROW) ){
        soundfx.stop()
    }
}