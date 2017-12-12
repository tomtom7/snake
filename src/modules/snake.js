import Random from './random';
import Draw from './draw';
import Apple from './apple';

const options = {
	width: 25,
	height: 25,
}

class Snake {
	constructor() {
		this.collided = false;
		this.color = Random.getRandomColor();
		this.blockWidth = options.width;
		this.blockHeight = options.height;
		this.blocks = Random.createRandomSnakeBlocks(options.width, options.height);
		this.apple = new Apple();
		this.direction = '';
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