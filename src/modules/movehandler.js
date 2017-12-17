import Collision from './collision'

const UP = 'up';
const DOWN = 'down';
const LEFT = 'left';
const RIGHT = 'right';

class MoveHandler {
	constructor(renderer) {
		this.renderer = renderer;
		this.grid = renderer.grid;
		this.keys = [];
		document.addEventListener("keyup", (e) => this._removeKey(e)); 
		document.addEventListener("keydown", (e) => this._saveKey(e));
	}

	_isTop() {
	    return this.keys[87] || this.keys[38];
	}

	_isDown() {
	    return this.keys[83] || this.keys[40];
	}

	_isLeft() {
	    return this.keys[65] || this.keys[37];
	}

	_isRight() {
	    return this.keys[68] || this.keys[39];
	}

	_saveKey(e) {
		this.keys[e.keyCode] = true;
		this._checkMovement();
	}

	_removeKey(e) {
		this.keys[e.keyCode] = false;
	}

	_checkLeftMovement() {
		if (this._isLeft() && this.grid.snake.direction != 'right') {
            this.grid.snake.direction = 'left';
        } 
	}

	_checkRightMovement() {
        if (this._isRight() && this.grid.snake.direction != 'left') {
            this.grid.snake.direction = 'right';
        }
	}

	_checkTopMovement() {
        if (this._isTop() && this.grid.snake.direction != 'down') {
            this.grid.snake.direction = 'up';
        }
	}

	_checkDownMovement() {
		if (this._isDown() && this.grid.snake.direction != 'up') {
			this.grid.snake.direction = 'down';
        }
	}

	_checkStart() {
    	if ( this._isTop() || this._isDown() || this._isRight()) {
    		this.grid.snake.moving = true;
    	}		
    }

	_checkMovement() {
		this._checkStart();
		this._checkTopMovement();
		this._checkLeftMovement();
		this._checkRightMovement();
		this._checkDownMovement();
		this.renderer.render();
    }

    update() {
    	if (!this.grid.snake.moving) {
    		return;
    	}

		let head = this.grid.snake.head();
		let newX = head.x;
		var newY = head.y;

		switch(this.grid.snake.direction) {
			case UP:
				newY -= this.grid.snake.scale
				break;
			case DOWN:
				newY += this.grid.snake.scale
				break;
			case RIGHT:
				newX += this.grid.snake.scale;
				break;
			case LEFT:
				newX -= this.grid.snake.scale;
		}

		if (Collision.withWall(newX, newY, this.grid.snake.scale) || Collision.withItSelf(newX, newY, this.grid.snake.blocks)) {
			 this.renderer.grid.reset();
		} else if (this.grid.snake.canEat(newX, newY)){
			this.grid.snake.eat();
		} else {
			this.grid.snake.move({x: newX, y: newY});
		}

	}
}

export default MoveHandler
