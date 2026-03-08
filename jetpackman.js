/*******************************************************/
// P5.play: minigame
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
let pause = 0;
let score = 0;
let obstacletime = 0;
let choice = 0;
let laserposition = [];
let speed = -3;
save = 0;
let spawnspeed = 50;
let random = [];
let randomAngle = [];
function setup() {
	console.log("setup: ");
cnv = new Canvas(1920, 1080);

let intervalID = setInterval(() => {
    if (pause < 1) {
           score = score + 1
    }
}, 100);
let intervalparts = setInterval(() => {
    if (pause < 1) {
        obstacletime = obstacletime + 1
    }
}, 100)

world.gravity.y = 10;

wallLH  = new Sprite(20, height/2, 40, height, 'k');

wallRH  = new Sprite(1900, 540, 40, 1080, 'k');

wallTop = new Sprite(960, 20, 1920, 40, 'k');

wallBot = new Sprite(960, 1060, 1920, 40, 'k');

playersprite = new Sprite(100, 1020, 40, 40, 'd');

playersprite.color = 255,200,200;

playersprite.rotationSpeed = 2;
//***** replay buttons visiblility*/
laserSprite = new Sprite(500, -500, 20, 400, 'l');
laserSprite2 = new Sprite(500, -500, 20, 450, 'l');
     laserSprite3 = new Sprite(500, -500, 20, 400, 'l');
laserSprite4 = new Sprite(500, -500, 20, 300, 'l');
laserRandom1 = new Sprite(500, -500, 20, 300, 'l');
 laserSprite.color = 255,0,0;
    laserSprite2.color = 255,0,0;
 wallSprite = new Sprite(-500, -500, 200, 400, 'l');
wallSprite2 = new Sprite(-500, -500, 200, 450, 'l');
replaySprite = new Sprite(width/2, height/2, 150, 150);
replaySprite.visible = true;
replaySprite.rotationLock = true;
playersprite.rotationLock = true;
}
function laser() {
    laserSprite = new Sprite(1920, 840, 20, 400, 'l');
laserSprite2 = new Sprite(1920, 265, 20, 450, 'l');
    laserSprite.color = 255,0,0;
    laserSprite.vel.x = speed;
    laserSprite.rotationLock = true;
    laserSprite2.color = 255,0,0;
    laserSprite2.vel.x = speed;
    laserSprite2.rotationLock = true;

       playersprite.rotationLock = true;
}
function laser2() {
    laserSprite3 = new Sprite(1920, 840, 20, 400, 'l');
laserSprite4 = new Sprite(1920, 340, 20, 300, 'l');
    laserSprite3.color = 255,0,0;
    laserSprite3.vel.x = speed;
    laserSprite3.rotationLock = true;
    laserSprite4.color = 255,0,0;
    laserSprite4.vel.x = speed;
    laserSprite4.rotationLock = true;
       playersprite.rotationLock = true;
}
function laserRandom() {
    laserposition = Math.random();
    laserposition = laserposition * 500
    laserposition = laserposition + 190;
    laserRandom1 = new Sprite(1920, laserposition, 20, 300, 'l');
    laserRandom1.color = 255,0,0;
    laserRandom1.vel.x = speed;
    laserRandom1.rotationLock = true;
       playersprite.rotationLock = true;
}
function wall() {
    wallSprite = new Sprite(1920, 840, 200, 400, 'l');
wallSprite2 = new Sprite(1920, 265, 200, 450, 'l');
    wallSprite.color = 255,0,0;
    wallSprite.vel.x = speed;
    wallSprite.rotationLock = true;
    wallSprite2.color = 255,0,0;
    wallSprite2.vel.x = speed;
    wallSprite2.rotationLock = true;
       playersprite.rotationLock = true;
       replaySprite.rotationLock = true;
}
function laserRotated() {
    random = Math.random();
    random = random * 500
    random = random + 100
    laserRandom = new Sprite(500, random, 20, 300, 'l');
    let randomAngle = Math.random();
    randomAngle = randomAngle * 90
    laserRandom.rotation = randomAngle;
    laserRandom.vel.x = -3
}
function killscreen() {
    console.log("HIT");
        replaySprite.visible = true;
        replaySprite.y == height/2
        replaySprite.x == width/2
pause = 1;
laserSprite.vel.x = 0;
laserSprite.vel.y = 0;
laserSprite2.vel.x = 0;
laserSprite2.vel.y = 0;
laserSprite3.vel.x = 0;
laserSprite3.vel.y = 0;
 laserSprite4.vel.x = 0;
laserSprite4.vel.y = 0;
 laserRandom1.vel.x = 0;
laserRandom1.vel.y = 0;
wallSprite.vel.x = 0;
wallSprite.vel.y = 0;
 wallSprite2.vel.x = 0;
wallSprite2.vel.y = 0;
obstacletime = 0;

}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    playersprite.x = 100;
    wallSprite.y = 840
       wallSprite2.y = 265
       if (obstacletime >= spawnspeed) {
        save = choice;
       choice = Math.random();
    choice = choice * 25
    if (save >= 0 && save < 5 && choice >= 0 && choice < 5) {
         choice = choice + 5;
    }
    if (save >= 5 && save < 10 && choice >= 5 && choice < 10) {
         choice = choice + 5;
    }
    if (save >= 10 && save <= 15 && choice >= 10 && choice < 15) {
         choice = choice + 5;
    }
      if (save >= 15 && save < 20 && choice >= 15 && choice < 20) {
         choice = choice + 5;
    }
        if (save >= 20 && save <= 225 && choice >= 20 && choice <= 25) {
         choice = choice - 5;
    }
      if (choice >= 5 && choice < 10) {
          laser();
      }
      if (choice < 5 && choice >= 0) {
          laser2();
      }
      if (choice >= 10 && choice < 15) {
            laserRandom();
        }
        if (choice >= 15 && choice < 20) {
            wall();
        }
             if (choice >= 20 && choice <= 25) {
            laserRandom();
        }
        obstacletime = 0;
        if (speed < 6) {
               speed = speed - 0.2;
        }
        if (spawnspeed > 30) {
            spawnspeed = spawnspeed - 1;
        }
    }
	background(255, 200, 200); 
         if (replaySprite.mouse.pressed() && replaySprite.visible == true) {
                 replaySprite.visible = false;
                 laserSprite.x = -500;
                     laserSprite.vel.x = -3
                            world.gravity.y = 10;
                              laserSprite2.x = -500;
                     laserSprite2.vel.x = -3
                     laserSprite3.x = -500;
                     laserSprite3.vel.x = -3
                     laserSprite4.x = -500;
                     laserSprite4.vel.x = -3
                     wallSprite.x = -500;
                     wallSprite.vel.x = -3
                      wallSprite2.x = -500;
                     wallSprite2.vel.x = -3
        pause = 0;
        console.log("active");
        score = 0
 }
    if (pause < 1) {
        if (kb.pressing ('up')) {
             if (playersprite.vel.y > -3) {
         playersprite.vel.y = -3;
    }
    if (playersprite.vel.y > -15) {
        playersprite.vel.y = playersprite.vel.y + -0.5;
    }
};
if (kb.released ('up')) {   
    if (playersprite.vel.y > 0) {
      playersprite.vel.y = playersprite.vel.y + 2;  
    }
};
    }
           if (playersprite.collides(laserSprite)) {
           
    }
    if (playersprite.collides(laserSprite2)) {
       
    }
    if (playersprite.collides(laserSprite3)) {
       
    }
        if (playersprite.collides(laserSprite4)) {
        
    }
          if (playersprite.collides(laserRandom1)) {
       
    }
      if (playersprite.collides(wallSprite)) {
        if (playersprite.x < wallSprite.x - 100) {
       
    }
    }
         if (playersprite.collides(laserRotated)) {
       
    }
     if (pause >= 1) {
       playersprite.vel.x = 0;
        playersprite.vel.y = 0;
        world.gravity.y = 0;
 }
 text("Score: "+score, 50, 50);
}
/*******************************************************/
//  END OF APP
/*******************************************************/