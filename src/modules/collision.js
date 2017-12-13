let canvas = document.getElementById("game");

class Collision {

	static _hasPoint(block, x, y) {
		return block.x == x && block.y == y;
	}

	static withItSelf(x, y, snake) {
		return snake.blocks.some((block) => this._hasPoint(block, x, y));
	}

	static withWall(x, y, snake) {
		return x < 0 || 
			y < 0 || 
			x >= canvas.width / snake.scale || 
			y >= canvas.height / snake.scale;
	}

}
export default Collision
