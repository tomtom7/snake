import Random from './random';

const options = {
	width: 25,
	height: 25,
}

let canvas = document.getElementById("game");

class Apple {
	constructor() {
		this.x = Random.getRandomStartingPosition(canvas.width, options.width);
		this.y = Random.getRandomStartingPosition(canvas.height, options.height);
		this.height = options.height;
		this.width = options.width;
	}
}

export default Apple