let soundEffect, bgMusic, staticImage;
let xpos = 300;
let ypos = 200;

let penG;
let secondguyX = 200 
let secondguyY = 200
let starfish;


function preload() {
    soundEffect = loadSound("assets/pop.mp3")
    // bgMusic = loadSound("assets/bossaNova.mp3")
    bg
    staticImage = loadImage("assets/pico-a.png")
    penG = loadImage("assets/penguin2-a.svg")
    starfish = loadImage("assets/starfish-a.svg")
}

function setup(){
    createCanvas(600, 400);
    background("pink");

    // bgMusic.loop();
}
function draw() {
    background("pink");
    // image(staticImage, xpos, ypos, 110, 133);
    image(penG, secondguyX, secondguyY, 109, 125);
    image(starfish, xpos, ypos, 119, 130);

//     fill("white");
//     rect(30, 30, 340, 340);

//     fill("black");
//     rect(xpos, ypos, 35, 35);

    if (keyIsDown(RIGHT_ARROW)){
        secondguyX = secondguyX + 5;
    }
    if (keyIsDown(LEFT_ARROW)){
        secondguyX = secondguyX - 5;
    }
    secondguyX = constrain(secondguyX, 0, width-110);

    if (keyIsDown(UP_ARROW)){
        secondguyY = secondguyY - 5;
    }
    else if (keyIsDown(DOWN_ARROW)){
        secondguyY = secondguyY + 5;
    }
    
    if (keyIsDown(32)){
        soundEffect.play()
    }

//     // if (keyIsDown("30")){
//     //     fill("pink");
//     // }
    secondguyY = constrain(secondguyY, 0, height-133);

    // circle(300, 200, 200)
    // rect(400, 200, 200, 200)
    // triangle(0, 200, 200, 200, 100, 0)
    if (keyIsDown(82)){
        xpos = xpos + 5;
    }
    if (keyIsDown(76)){
        xpos = xpos - 5;
    }
    xpos = constrain(xpos, 0, width-110);

    if (keyIsDown(85)){
        ypos = ypos - 5;
    }
    else if (keyIsDown(68)){
        ypos = ypos + 5;
    }
    
    if (keyIsDown(32)){
        soundEffect.play()
    }

//     // if (keyIsDown("30")){
//     //     fill("pink");
//     // }
    ypos = constrain(ypos, 0, height-133);

    // circle(300, 200, 200)
    // rect(400, 200, 200, 200)
    // triangle(0, 200, 200, 200, 100, 0)
}
    


