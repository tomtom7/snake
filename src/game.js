import Snake from './modules/snake';
import Movement from './modules/movement';
import Keys from './modules/keys';
import Draw from './modules/draw';
import Apple from './modules/apple';


class Game {
    constructor() {
        this.fps = 20;
        this.then = Date.now();
        this.interval = 1000 / this.fps;
        this._restart();
    }

    _restart() {
        if (this.state != 'playing') {
            this.snake = new Snake();
            this.addApple()
            this.movement = new Movement();
            this.state = 'waiting';
        }
    }

    addApple() {
        this.apple = new Apple(this.snake);
    }

    end() {
        this.snake.collide();
        this.state = 'ended';
    }

    mainLoop(time) {
        requestAnimationFrame(() => this.mainLoop());
        this.now = Date.now();
        this.delta = this.now - this.then;
     
        if (this.delta > this.interval) {
            // Just `then = now` is not enough.
            // Lets say we set fps at 10 which means each frame must take 100ms
            // Now frame executes in 16ms (60fps) so the loop iterates 7 times (16*7 = 112ms) until delta > interval === true
            // Eventually this lowers down the FPS as 112*10 = 1120ms (NOT 1000ms). So we have to get rid of that extra 12ms
            // by subtracting delta (112) % interval (100).
            this.then = this.now - (this.delta % this.interval);
            Draw.game(this);

            switch(this.state) {
                case 'ended':
                    this.checkRestart();
                    break;
                case 'playing':
                    this.movement.check(this)
                    break;
                case 'waiting':
                    this.checkStart();
                    break;
            }
        }
    }

    checkRestart() {
        if (Keys.isRestartKey()) {
            this._restart();
        }
    }

    checkStart() {
        if (!this.snake.moving) {
            this.movement.check(this);
        }

        if (this.snake.moving) {
            this.state = 'playing';
        }
    }

    start() {
        requestAnimationFrame(() => this.mainLoop());
    }
}

let game = new Game();
game.start();
