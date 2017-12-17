import Random from './random';
import Apple from './apple';

class Snake {
	constructor(scale) {
		this.scale = scale;
		this.moving = false;
		this.color = Random.getRandomColor();
		this.blocks = this._createBlocks(this.scale);
		this.direction = 'right';
		this.apple = new Apple(this.blocks, this.scale);
	}

	_createBlocks(scale) {
		let blocks = [];

		for (var i = 5; i >= 0; i--) {
			blocks.push({x: i * this.scale, y: this.scale * 10});
		}

		return blocks;
	}

	move(block) {
		this.blocks.unshift(block);
		this.blocks.pop();
    }	

    canEat(x, y) {
		return this.apple.x == x && this.apple.y == y;
	}

    eat() {
    	this.blocks.unshift(this.apple);
    	this.apple = new Apple(this.blocks, this.scale);
    }

	head() {
    	return this.blocks[0];
    }
}

export default Snake