
ballX= 5;
ballSpeedX=5;
let x= 200;

function setup() {
    createCanvas (600, 400);
    background(220);
}

 function draw() {
    background(220)
    circle(width/2, height/2, 50);
    fill('limegreen')

    if(keyIsDown(LEFT_ARROW)) {
        x -=5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x +=5;
     }
    if (x < 25 ) {
        x = 25;
    }
    if(x > width - 25) {
        x = width - 25;
    }
 }






//     if (x - ballSpeedx/2 <= 0 || x + ballSpeedX/2 >= width) {
//      x = x *-1;
//  }


// ballX = ballX + ballSpeedX;
// ballY = ballY + ballSpeedY;

// if (ballX - ballSize/2 <= 0 || ballX + ballSize/2 >= width) {
//     ballSpeedX = ballSpeedX *-1;
// }
// if(ballY - ballSize/2 <= 0 || ballY + ballSize/2 >=height) {
//     ballSpeedY = ballSpeedY *-1;