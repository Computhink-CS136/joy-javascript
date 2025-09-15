let soundfx;
let ypos;

function preload() {
    soundfx = loadSound('assets/attack-theme-382730.mp3');
}

function setup() {
    createCanvas(1500, 500);
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
        "Young Mei had been cursed with the 'Night Flame' since she was born.",
        "The Night Flame has stalked her for years.",
        "She lived in fear of the Flames.",
        "But one day, Mei discovered that there was more than evil behind the flames...",
        "She decided to fight the flames of rebellion,",
        "Would she survive the curse put on her,",
        "Or will she perish, with the flames?"
    ];


    translate( width/2, ypos)
    fill("orange");
    textSize(40);
    textAlign(CENTER, CENTER);
    // text("The Curse of the Flames", 0, 0);

for (let i = 0; i < 8; i++)
    text(Flames[0], 0, 0);
    text(Flames[1], 0, 50);
    text(Flames[2], 0, 100);
    text(Flames[3], 0, 150);
    text(Flames[4], 0, 200);
    text(Flames[5], 0, 250);
    text(Flames[6], 0, 300);
    text(Flames[7], 0, 350);

    ypos = ypos - 1;

    if (ypos < 0){
        ypos = height;
    }
}