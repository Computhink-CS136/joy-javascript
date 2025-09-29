let xpos;
let velocityX = 2;
let sfx;
let bgcolor = "pink";
// let interval;

let objectID;
let counter = 10;

function setup() {
    createCanvas(600, 400);
    background(bgcolor);
    xpos = width/2;


}
function countdown() {
    counter--;
    counter = constrain(counter, 0, 10);
    if (counter === 0) {
        sfx.play();
        clearInterval( objectID );
    }
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
    fill("purple")
    textSize(32)
    text("Countdown Timer😆", 300, 170);
    text(counter, 300, 230)
    text("Click me to start the timer🙂", 300, 280)
    // text("Created by Joy", 200, 320)
    pi = 3.142;
    console.log( nf(pi, 1, 3) );
    }
function mousePressed() {
    // sfx.play();
    if (counter === 10) {
    objectID = setInterval(countdown, 1000);
    }
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