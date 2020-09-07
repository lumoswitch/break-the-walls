/*
To kick this all off we want to create a collision detection function that will loop through all the bricks and compare every 
single brick's position with the ball's coordinates as each frame is drawn.
If the center of the ball is inside the coordinates of one of our bricks, we'll change the direction of the ball. 
For the center of the ball to be inside the brick, all four of the following statements need to be true:

  The x position of the ball is greater than the x position of the brick.
  The x position of the ball is less than the x position of the brick plus its width.
  The y position of the ball is greater than the y position of the brick.
  The y position of the ball is less than the y position of the brick plus its height.


*/


function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          
          if(score == brickRowCount*brickColumnCount) {
            alert("Congratulations! You won 🎉");
            document.location.reload();
          }
        }
      }
    }
  }
}
