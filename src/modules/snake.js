import Random from './random';
import Draw from './draw';

const defaults = {
	width: 10,
	height: 10,
	speed: 2
}

class Snake {
	constructor(options) {
		if (!options) {
			options = defaults;
		}
		this.collided = false;
		this.color = Random.getRandomColor();
		this.moveSpeed = options.speed;
		this.blockWidth = options.width;
		this.blockHeight = options.height;
		this.blocks = Random.createRandomSnakeBlocks(defaults.width, defaults.height);
	}

	draw() {
		Draw.game(this);
	}

	move(block) {
    	this.blocks.unshift(block);
		this.blocks.pop();
    }

    getHead() {
    	return this.blocks[0];
    }

    collide() {
		this.collided = true;
	}
}

export default Snake