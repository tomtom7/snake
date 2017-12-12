let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameOver() {
	let x = (canvas.width / 2) - 170;
	let y = canvas.height / 2;

	ctx.font = 'italic 20pt Calibri';
	ctx.fillStyle = "black";
	ctx.fillText('Game over! Press space to restart', x, y);
}

function game(snake) {
    clearCanvas();

    ctx.fillStyle = snake.color;

    snake.blocks.forEach((block) => {
        ctx.fillRect(block.x, block.y, snake.blockWidth, snake.blockHeight);
    });

    ctx.fillRect(snake.apple.x, snake.apple.y, snake.apple.width, snake.apple.height);

     if (snake.collided) {
        gameOver();
    }
}

export default {game}