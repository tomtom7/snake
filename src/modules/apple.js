import Random from './random';
import Collision from './collision';

const options = {
	width: 1,
	height: 1,
	scale: 15
}

let canvas = document.getElementById("game");

class Apple {
	constructor(snake) {
		this.height = options.height;
		this.width = options.width;
		this._getPosition(snake);
	}

	_getPosition(snake) {
		let x = Random.getRandomStartingPosition(canvas.width, options.width, options.scale);
		let y = Random.getRandomStartingPosition(canvas.height, options.width, options.scale);

		if (Collision.withItSelf(x, y, snake)) {
			this._getPosition(snake);
		}  else {
			this.x = x;
			this.y = y;
		}
	}
}

export default Apple