let xpos;
let velocityX = 2;
let sfx;
let bgcolor = "pink";

function setup() {
    createCanvas(600, 400);
    background(bgcolor);
    xpos = width/2;

}
function preload() {
    sfx = loadSound("assets/bell-notification-337658.mp3")
}

function draw() {
    background(bgcolor);


    let hour24 = hour() -12
    hour24 = nf(hour24, 2);

    let nowMinute = minute();
    nowMinute = nf(nowMinute, 2);

    let aSecond  = second();
    aSecond = nf(aSecond, 2);

    textSize(50)
    textAlign(CENTER, CENTER)
    fill("hotpink");
    text("Time : " + hour24 + " : " + nowMinute + " : " + aSecond, width/2, height/4)
    // textSize(32)
    text("Countdown Timer😆", 32,130)
    }
function mousePressed() {
    sfx.play();
}
function keyPressed() {
    if (keyCode === 32) {
        bgcolor = color( random(255), random(255), random(255));
    }
}
    // background("pink");
    // fill("gray");
    // textAlign(CENTER, BOTTOM);

    // textSize(32);
    // text("Bounce!", xpos, height/2);  
    // xpos = xpos + velocityX;
    // if (xpos > width - 80){
    //     velocityX = velocityX * -1;
    // }
    // else if (xpos < 0 + 80){
    //         velocityX = velocityX * -1;