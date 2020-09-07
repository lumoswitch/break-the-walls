var lives = 3;

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#f54254";
  ctx.fillText("❤️: "+lives, canvas.width-65, 20);
}