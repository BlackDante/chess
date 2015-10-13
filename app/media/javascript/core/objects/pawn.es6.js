class Pawn {
    constructor(game, state) {
        this.game = game;
        this.state = state;
    }

    static preload(state) {
        state.load.image('pawn', './app/media/images/pawn.png');
    }

    create(x, y) {
        return this.game.add.sprite(x, y, 'pawn');
    }
}

export default Pawn;
