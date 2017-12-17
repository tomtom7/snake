let canvas = document.getElementById("game");

class Collision {

	static _hasPoint(block, x, y) {
		return block.x == x && block.y == y;
	}

	static withItSelf(x, y, blocks) {
		return blocks.some(block => this._hasPoint(block, x, y));
	}

	static withWall(x, y, scale) {
		return x < 0 || 
			y < 0 || 
			x + scale > canvas.width ||
			y + scale > canvas.height;
	}

}
export default Collision
