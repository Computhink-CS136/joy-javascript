let xpos;
let velocityX = 2;
function setup() {
    createCanvas(600, 400);
    background("pink");
    xpos = width/2;

}

function draw() {
    let hour24 = hour()
    let nowMinute = minute();
    textSize(32)
    textAlign(CENTER, CENTER)
    fill("hot pink")
    text("Time:" + hour24 + ":")
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