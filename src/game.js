import Movehandler from './modules/movehandler';
import Renderer from './modules/renderer';

class Game {
    constructor(options) {
        this.renderer = new Renderer(options);
        this.movehandler = new Movehandler(this.renderer);
    }

    main() {
        this.currentTime = new Date().getTime();
 
        if (this.currentTime - this.lastTime > (1000 / this.renderer.grid.options.fps)) {
            this.movehandler.update();
            this.renderer.render();
            this.lastTime = this.currentTime;
        }
        requestAnimationFrame(() => this.main());
    }

    start() {
        this.lastTime = new Date().getTime();
        this.main();
    }
}

let options = {
    scale: 20,
    fps: 15
}

let game = new Game(options);
game.start();
