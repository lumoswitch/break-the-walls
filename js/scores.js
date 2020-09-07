var score = 0;

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#141414";
    ctx.fillText("🎯: "+score, 8, 20);
}