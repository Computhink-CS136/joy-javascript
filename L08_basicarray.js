let soundfx

function preload() {
    soundfx = loadSound('assets/attack-theme-382730.mp3')
}

function setup() {
    createCanvas(800, 400);
    background(80);

    fill("pink")
    textSize(32);
    text("Hello. Bot1806j activated.", 20, 50);
    text("What do you want to do?", 20, 100)
    text("Choose:", 20, 150)
    text("'Read a book'  'Play a game'", 20, 200)
    text("Advice:")

    // text("I am Chicken Feathery.", 20, 50)
    // text("People like to eat me.", 20, 100)
    // text("Ouch! Someone just ate my wing. Help!!!", 20, 150)

    // let xpos = 100;
    // for (let count=0; count<5; count++){
    //     circle(xpos, 250, 50);
    //     xpos = xpos + 55;
    // }
}

function draw(){
    if ( keyIsDown(32) ){
        soundfx.play()
    }
    if ( keyIsDown(DOWN_ARROW) ){
        soundfx.stop()
    }
}