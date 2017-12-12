import Snake from './modules/snake';
import Move from './modules/move';
import Keys from './modules/keys';

let snake = new Snake();
let updateId,
    previousDelta = 0,
    fpsLimit = 7;
requestAnimationFrame(update);

function update(currentDelta) {

    updateId = requestAnimationFrame(update);

    let delta = currentDelta - previousDelta;

    if (fpsLimit && delta < 1000 / fpsLimit) {
        return;
    }

   

    if (Keys.isRestartKey() && snake.collided) {
        snake = new Snake();
    }

    if (!snake.collided) {
        checkMovement();
    }
    snake.draw();

    previousDelta = currentDelta;
}

function checkMovement() {
    if (Keys.isUpKey() && snake.direction != "down") {
        snake.direction = "up";
    } else if (Keys.isDownKey() && snake.direction != "up") {
        snake.direction = "down";
    } else if (Keys.isLeftKey() && snake.direction != "right") {
        snake.direction = "left";
    } else if (Keys.isRightKey() && snake.direction != "left") {
        snake.direction = "right";
    }

    console.log("checking");
    Move.move(snake);
}
