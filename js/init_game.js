var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
//we will define a starting point at the bottom center part of the Canvas in variables called x and y, 
//then use those to define the position the circle is drawn at.
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

/*Function: drawBall
* Parameters: none
* Details: draws a blue circle on canvas
*/
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#4d4dff";
  ctx.fill();
  ctx.closePath();
}


/*Function: draw
* Parameters: none
* Details: draws the full game graphics on canvas
*/
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //Clearing the canvas before each frame
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  //Bouncing off the left and right and keep ball within the walls
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  //Bouncing off the top and bottom
  if (y + dy < ballRadius) {
    dy = -dy;
  }else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) { //Letting the paddle hit the ball
      dy = -dy;
    }else {
      lives--;
      if (!lives) {
        alert("GAME OVER 😥");
        document.location.reload();
      }else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7; //move for 7 pixels
  }else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

/*Function: call
* Parameters: none
* Details: start the game
*/
function call(){
  draw();
  document.getElementById("start").style.visibility = "hidden"; 
}
 


