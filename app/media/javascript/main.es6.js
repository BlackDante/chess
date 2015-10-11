let game;

game = new Phaser.Game(1044, 1059, Phaser.Auto, '', {
    preload: () => {
        game.load.image('board', './app/media/images/board.png');
        game.load.image('pawn', './app/media/images/pawn.png');
    },
    create: () => {
        let board = game.add.sprite(game.world.centerX, game.world.centerY, 'board');
        board.anchor.setTo(0.5, 0.5);

        let pawns = game.add.group();
        pawns.add(game.add.sprite(0, 787, 'pawn'));
        pawns.add(game.add.sprite(120, 787, 'pawn'));
        pawns.add(game.add.sprite(250, 787, 'pawn'));
        pawns.add(game.add.sprite(380, 787, 'pawn'));
        pawns.add(game.add.sprite(520, 787, 'pawn'));
        pawns.add(game.add.sprite(640, 787, 'pawn'));
        pawns.add(game.add.sprite(780, 787, 'pawn'));
        pawns.add(game.add.sprite(900, 787, 'pawn'));

        pawns.forEach((item) => {
            item.inputEnabled = true;
            item.input.enableDrag(true, true);
            item.events.onDragStop.add(() => {
                console.log('stops');
            });
        });
    }
});
