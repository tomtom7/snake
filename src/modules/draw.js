let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

class Draw {
	static _clearCanvas() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	static _gameOver() {
		let x = (canvas.width / 2) - 170;
		let y = canvas.height / 2;

		ctx.font = 'italic 20pt Calibri';
		ctx.fillStyle = "black";
		ctx.fillText('Game over! Press space to restart', x, y);
	}

	static game(game) {
		this._clearCanvas();

		ctx.save();
		ctx.scale(game.snake.scale, game.snake.scale);

	    game.snake.blocks.forEach((block) => {
	    	ctx.beginPath();
	    	ctx.fillStyle = game.snake.color;
	    	ctx.fillRect(block.x, block.y, game.snake.width, game.snake.height);
	    });
	    
	    ctx.fillRect(game.apple.x, game.apple.y, game.apple.width, game.apple.height);

	    ctx.restore();
	     if (game.snake.collided) {
	        this._gameOver();
	    }
	}
}
export default Draw