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

    let Flames = [
        "Flames have never been a joke.",
        "Young Mei had been cursed with the 'Night Flame' since she was born."
        
    ];

    text(Flames[0], 0, 0);
    text(Flames[1], 0, 50);

    translate( width/2, ypos)
    fill("orange");
    textSize(40);
    textAlign(CENTER, CENTER);
    text("The Curse of the Flames", 0, 0);

    ypos = ypos - 1;
}