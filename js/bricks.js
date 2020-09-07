// var brickRowCount = 5;
// var brickColumnCount = 3;
var brickRowCount = Math.floor((Math.random() * 5) + 1);;
var brickColumnCount =  Math.floor((Math.random() * 5) + 1); 
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 }; //status: used to disappear hitted bricks
  }
}

function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        //Each brickX position is worked out as brickWidth + brickPadding, multiplied by the column number, c, 
        //plus the brickOffsetLeft; the logic for the brickY is identical except that it uses the values for row number, r, 
        //brickHeight, and brickOffsetTop. Now every single brick can be placed in its correct place row and column, with padding 
        //between each brick, drawn at an offset from the left and top canvas edges.
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}