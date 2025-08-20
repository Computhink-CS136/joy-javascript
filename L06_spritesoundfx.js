let soundEffect, bgMusic, staticImage;
let xpos = 300;
let ypos = 200;

function preload() {
    soundEffect = loadSound("assets/pop.mp3")
    bgMusic = loadSound("assets/bossaNova.mp3")
    staticImage = loadImage("assets/pico-a.png")
}

function setup(){
    createCanvas(600, 400);
    background("pink");

    // bgMusic.loop();
}
function draw() {
    background("pink");
    image(staticImage, xpos, ypos, 110, 133);

//     fill("white");
//     rect(30, 30, 340, 340);

//     fill("black");
//     rect(xpos, ypos, 35, 35);

    if (keyIsDown(RIGHT_ARROW)){
        xpos = xpos + 5;
    }
    if (keyIsDown(LEFT_ARROW)){
        xpos = xpos - 5;
    }
    xpos = constrain(xpos, 0, width-110);

    if (keyIsDown(UP_ARROW)){
        ypos = ypos - 5;
    }
    else if (keyIsDown(DOWN_ARROW)){
        ypos = ypos + 5;
    }
    else if (keyIsDown(32)){
        soundEffect.play()
    }

//     // if (keyIsDown("30")){
//     //     fill("pink");
//     // }
    ypos = constrain(ypos, 0, height-133);

    circle(300, 200, 50)
    rect(30, 30, 50, 50)
    triangle(300, 200, 0, 0, 50, 50)
}
    


