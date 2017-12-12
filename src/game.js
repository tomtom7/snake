import Snake from './modules/snake';
import Move from './modules/move';
import Keys from './modules/keys';

let snake = new Snake();

requestAnimationFrame(update);

function update() {
    if (Keys.isRestartKey() && snake.collided) {
        snake = new Snake();
    }

    if (!snake.collided) {
        checkMovement();
    }
    snake.draw();
    requestAnimationFrame(update);
}

function checkMovement() {
    if (Keys.isUpKey()) {
        Move.up(snake);
    } else if (Keys.isDownKey()) {
        Move.down(snake);
    } else if (Keys.isLeftKey()) {
        Move.left(snake);
    } else if (Keys.isRightKey()) {
        Move.right(snake);
    }
}
