let xpos;
let velocityX = 2;
function setup() {
    createCanvas(600, 400);
    background("pink");
    xpos = width/2;

}

function draw() {
    background("pink");

    let hour24 = hour()
    let nowMinute = minute();
    let aSecond  = second();
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