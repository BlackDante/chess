class Pawn {
    constructor(game, state) {
        this.game = game;
        this.state = state;
    }

    static preload() {
        this.state.load.image('pawn', './app/media/images/pawn.png');
    }

    create() {

    }
}

export default Pawn;
