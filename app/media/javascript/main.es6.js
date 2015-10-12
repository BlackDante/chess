import PlayState from './core/states/play.es6.js';

class Main {
    constructor() {
        this.game = new Phaser.Game(1044, 1059, Phaser.Canvas, 'game-wrapper');

        this.game.state.add('Play', PlayState);

        this.game.state.start('Play');
    }
}

new Main();
