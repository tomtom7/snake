let canvas = document.getElementById("game");


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomStartingPosition(maxRandom, maxBoxSide) {
	return Math.floor(Math.random() * (maxRandom - maxBoxSide));
}

//1 horizontal, 2 vertical
function getRandomDirection() {
	return Math.floor(Math.random() * 2) + 1;
}

function createRandomSnakeBlocks(width, height) {
    let blocks = [];
    let randomX = getRandomStartingPosition(canvas.width, width);
    let randomY = getRandomStartingPosition(canvas.height, height);
    let randomDirection = getRandomDirection(canvas.height, height);

    [1,2,3].forEach((i) => {
        if (randomDirection == 1) {
            blocks.push({x: randomX + (width * i), y: randomY});
        } else {
            blocks.push({x: randomX, y: randomY + (height * i)});
        }
    });

    return blocks;
}

export default {getRandomColor, getRandomStartingPosition, getRandomDirection, createRandomSnakeBlocks}
