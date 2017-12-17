import Grid from './grid';

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

class Renderer {

	constructor(options) {
		this.grid = new Grid(options);
	}

	_clearCanvas() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	_drawGrid(scale) {
	    ctx.beginPath();
	    ctx.lineWidth = 0.15;
	    ctx.strokeStyle = '#000000';
	    for (let x = 0; x <= canvas.width; x += scale) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
	    }

	    ctx.stroke(); 

	    ctx.beginPath();
	    for (let y = 0; y <= canvas.height; y += scale) {
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
	    }
	    ctx.stroke(); 
	}

	render() {
		this._clearCanvas();
		this._drawGrid(this.grid.options.scale);
		this._renderBlocks(this.grid.snake.blocks, this.grid.snake.scale);
	    this._renderBlock(this.grid.snake.apple, this.grid.snake.apple.scale);
	}

	_renderBlocks(blocks, scale) {
		ctx.save();
		blocks.forEach(b => this._renderBlock(b, scale));
		ctx.restore();
	}

	_renderBlock(block, scale) {
		ctx.beginPath();
		ctx.rect(block.x, block.y, scale, scale);
		ctx.fillStyle = this.grid.snake.color;
		ctx.fill();

		ctx.strokeStyle = "#FFFFFF";
		ctx.lineWidth = 1;
		ctx.stroke();
		ctx.closePath();
	}
}
export default Renderer