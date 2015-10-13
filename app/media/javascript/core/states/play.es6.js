import Board from '../objects/board.es6.js';
import Pawn from '../objects/pawn.es6.js';

class Play extends Phaser.State {
    init() {
        this.board = new Board(this.game, this);
    }

    preload() {
        Board.preload(this);
        Pawn.preload(this);
    }

    create() {
        this.board.create();

        let pawns = this.game.add.group();
        pawns.add((new Pawn(this.game, this)).create(0, 787));
        pawns.add((new Pawn(this.game, this)).create(120, 787));
        pawns.add((new Pawn(this.game, this)).create(250, 787));
        pawns.add((new Pawn(this.game, this)).create(380, 787));
        pawns.add((new Pawn(this.game, this)).create(520, 787));
        pawns.add((new Pawn(this.game, this)).create(640, 787));
        pawns.add((new Pawn(this.game, this)).create(780, 787));
        pawns.add((new Pawn(this.game, this)).create(900, 787));

        pawns.forEach((item) => {
            item.inputEnabled = true;
            item.input.enableDrag(true, true);
            item.events.onDragStop.add(() => {
                console.log('stops');
            });
        });
    }
}

export default Play;
