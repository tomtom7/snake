import Random from './random';
import Draw from './draw';
import Apple from './apple';

const options = {
	width: 1,
	height: 1,
	scale: 16,
	direction: 'right',
	moving: false,
}

class Snake {
	constructor() {
		this.collided = false;
		this.color = Random.getRandomColor();
		this.width = options.width;
		this.height = options.height;
		this.scale = options.scale;
		this.blocks = this._createBlocks(this.width);
		this.direction = options.direction;
		this.moving = options.moving;
	}

	_createBlocks(blockWidth) {
		let blocks = [];

		for (var i = 15; i >= 10; i--) {
			blocks.push({x: i, y: 10});
		}

		return blocks;
	}

	move(block) {
		this.blocks.unshift(block);
		this.blocks.pop();
    }

    eat(apple) {
    	this.blocks.unshift(apple);
    }

	head() {
    	return this.blocks[0];
    }

    collide() {
		this.collided = true;
	}

	canEat(x, y, apple) {
		return apple.x == x && apple.y == y;
	}
}

export default Snake