import Board from '../objects/board.es6.js';

class Play extends Phaser.State {
    init() {
        this.board = new Board(this.game, this);
    }

    preload() {
        this.board.preload();

        this.load.image('pawn', './app/media/images/pawn.png');
    }

    create() {
        this.board.create();

        let pawns = this.game.add.group();
        pawns.add(this.game.add.sprite(0, 787, 'pawn'));
        pawns.add(this.game.add.sprite(120, 787, 'pawn'));
        pawns.add(this.game.add.sprite(250, 787, 'pawn'));
        pawns.add(this.game.add.sprite(380, 787, 'pawn'));
        pawns.add(this.game.add.sprite(520, 787, 'pawn'));
        pawns.add(this.game.add.sprite(640, 787, 'pawn'));
        pawns.add(this.game.add.sprite(780, 787, 'pawn'));
        pawns.add(this.game.add.sprite(900, 787, 'pawn'));

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
