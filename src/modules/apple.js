import Random from './random';
import Collision from './collision';

let canvas = document.getElementById("game");

class Apple {
	constructor(blocks, scale) {
		this.scale = scale;
		this._getPosition(blocks);
	}

	_getPosition(blocks) {
		let x = Random.getRandomStartingPosition(canvas.width, this.scale);
		let y = Random.getRandomStartingPosition(canvas.height, this.scale);

		if (Collision.withItSelf(x, y, blocks)) {
			this._getPosition(blocks);
		}  else {
			this.x = x;
			this.y = y;
		}
	}
}

export default Apple