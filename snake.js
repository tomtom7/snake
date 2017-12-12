let c = document.getElementById("snake");
let restartBtn = document.getElementById("restart");
let ctx = c.getContext("2d");

let keys = [];
let snake = createSnake(10, 10, 2, getRandomColor());;

requestAnimationFrame(update);

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createSnake(width, height, speed, color) {
    return {
        collided: false,
        color: color,
        moveSpeed: speed,
        blockWidth: width,
        blockHeight: height,
        blocks: createRandomSnakeBlocks(width, height)
    }
}

function createRandomSnakeBlocks(width, height) {
    let blocks = [];
    let randomX = getRandomStartingPosition(c.width, width);
    let randomY = getRandomStartingPosition(c.height, height);
    let randomDirection = getRandomDirection(c.height, height);

    [1,2,3].forEach((i) => {
        if (randomDirection == 1) {
            blocks.push({x: randomX + (width * i), y: randomY});
        } else {
            blocks.push({x: randomX, y: randomY + (height * i)});
        }
    });

    return blocks;
}

//todo generate only divisble by 10 numbers
function getRandomStartingPosition(maxRandom, maxBoxSide) {
    return Math.floor(Math.random() * (maxRandom - maxBoxSide)) ;
}

//1 horizontal, 2 vertical
function getRandomDirection() {
    return Math.floor(Math.random() * 2) + 1;
}

function update() {
    requestAnimationFrame(update);

    if (snake.collided) {
        return;
    }
    
    if (isUpKey()) {
        moveUp(snake);
    } else if (isDownKey()) {
        moveDown(snake);
    } else if (isLeftKey()) {
        moveLeft(snake);
    } else if (isRightKey()) {
        moveRight(snake);
    }
    draw();
}

document.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
document.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});


function moveUp(snake) {
    let head = getSnakeHead();
    let y = head.y - snake.blockHeight

    if (y >= 0) {
        snake.blocks.unshift({x: head.x, y: y});
        snake.blocks.pop();
    } else {
        endGame();
    }
}

function moveDown(snake) {
    let head = getSnakeHead();
    let y = head.y + snake.blockHeight;

    if (y < c.height) {
       snake.blocks.unshift({x: head.x, y: y});
       snake.blocks.pop();
    } else {
        endGame();
    }
}

function moveLeft(snake) {
    let head = getSnakeHead();
    let x = head.x - snake.blockWidth;

    if (x >= 0) {
        snake.blocks.unshift({x: x, y: head.y});
        snake.blocks.pop();
    } else {
        endGame();
    }
}

function moveRight(snake) {
    let head = getSnakeHead();
    let x = head.x + snake.blockWidth;

    if (x < c.width) {
        snake.blocks.unshift({x: x, y: head.y});
        snake.blocks.pop();
    } else {
        endGame();
    }
}

function endGame() {
    snake.collided = true;
    restartBtn.style.display = 'block';
}

function restartGame() {
    snake = createSnake(10, 10, 2, getRandomColor());
    restartBtn.style.display = 'none';
}

function getSnakeHead() {
    return snake.blocks[0];
}

function isUpKey() {
    return keys[87] || keys[38];
}

function isDownKey() {
    return keys[83] || keys[40];
}

function isLeftKey() {
    return keys[65] || keys[37]
}

function isRightKey(keyCode) {
    return keys[68] || keys[39]
}

function drawGameOver() {
    let x = (c.width / 2) - 100;
    let y = c.height / 2;

    ctx.font = 'italic 20pt Calibri';
    ctx.fillStyle = "black";
    ctx.fillText('Game over!', x, y);
}

function draw() {
    clearCanvas();
    ctx.fillStyle = snake.color;

    snake.blocks.forEach((block) => {
        ctx.fillRect(block.x, block.y, snake.blockWidth, snake.blockHeight);
    });

    if (snake.collided) {
        drawGameOver();
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, c.width, c.height);
}