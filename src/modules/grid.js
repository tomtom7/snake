import Snake from "./snake"

let canvas = document.getElementById("game-canvas");

class Grid {

	constructor(options) {
        this.options = options;
        this.reset();
	}

    reset() {
        this.snake = new Snake(this.options.scale);
    }
}

export default Grid;
