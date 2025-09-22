let xpos;
let velocityX = 2;
function setup() {
    createCanvas(600, 400);
    background("pink");
    xpos = width/2;

}

function draw() {
    background("pink");


    let hour24 = hour() -12
    hour24 = nf(hour24, 2);

    let nowMinute = minute();
    nowMinute = nf(aMinute, 2);

    let aSecond  = second();
    aSecond = nf(aSecond, 2);
    textSize(32)
    textAlign(CENTER, CENTER)
    fill("hotpink");
    text("Time : " + hour24 + " : " + nowMinute + " : " + aSecond, width/2, height/2)
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