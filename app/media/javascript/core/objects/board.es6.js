class Board {
    constructor(game, state) {
        this.game = game;
        this.state = state;
    }

    preload() {
        this.state.load.image('board', './app/media/images/board.png');
    }

    create() {
        let board = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'board');
        board.anchor.setTo(0.5, 0.5);
    }
}

export default Board;
