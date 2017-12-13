import Keys from './keys';
import Collision from './collision'

class Movement {

	_move(game) {
		let head = game.snake.head();
		let newX = head.x;
		var newY = head.y;

		if (game.snake.direction == 'up') {
			newY -= game.snake.speed;
		} else if (game.snake.direction == 'down') {
			newY += game.snake.speed;
		} else if (game.snake.direction == 'right') {
			newX += game.snake.speed;
		} else if (game.snake.direction == 'left') {
			newX -= game.snake.speed;
		}

		if (Collision.withWall(newX, newY, game.snake) || Collision.withItSelf(newX, newY, game.snake)) {
			 game.end();
		} else if (game.snake.canEat(newX, newY, game.apple)){
			game.snake.eat(game.apple);
			game.addApple();
		} else {
			game.snake.move({x: newX, y: newY});
		}
	}

	_started() {
    	return Keys.isUpKey() || Keys.isDownKey() || Keys.isRightKey();
    }


	_checkDirection(snake) {
		if (this._started()) {
			snake.moving = true;
		}
    	if (Keys.isUpKey() && snake.direction != "down") {
            snake.direction = "up";
        } else if (Keys.isDownKey() && snake.direction != "up") {
            snake.direction = "down";
        } else if (Keys.isLeftKey() && snake.direction != "right") {
            snake.direction = "left";
        } else if (Keys.isRightKey() && snake.direction != "left") {
            snake.direction = "right";
        }
    }

    check(game) {
		this._checkDirection(game.snake);

		if (game.snake.moving) {
        	this._move(game);
        }
    }
}

export default Movement
