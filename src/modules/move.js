let canvas = document.getElementById("game");


function up(snake) {
    let head = snake.getHead();
    let y = head.y - snake.blockHeight

    if (y >= 0) {
    	snake.move({x: head.x, y: y});
    } else {
        snake.collide();
    }
}

function down(snake) {
    let head = snake.getHead();
    let y = head.y + snake.blockHeight;

    if (y < canvas.height) {
    	snake.move({x: head.x, y: y});
    } else {
        snake.collide();
    }
}

function left(snake) {
    let head = snake.getHead();
    let x = head.x - snake.blockWidth;

    if (x >= 0) {
    	snake.move({x: x, y: head.y});
    } else {
        snake.collide();
    }
}

function right(snake) {
    let head = snake.getHead();
    let x = head.x + snake.blockWidth;

    if (x < canvas.width) {
    	snake.move({x: x, y: head.y});
    } else {
        snake.collide();
    }
}

export default {up, down, left, right}
