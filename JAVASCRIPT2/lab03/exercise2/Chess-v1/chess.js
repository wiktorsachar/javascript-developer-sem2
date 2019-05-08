/* Chess board. Program is to choose at random one of the chess piece (except the pawn) and place it 
at the random spot on the board. After placing any piece (except first one) check all present pieces move 
ranges and see if any can reach other piece. Is so Give that pieces position and quit program. */

class Chessboard {
    init() {
        return (
            [
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
            ]
        )
    }
}

class Figures {
    rook(board, position) {
        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if ((y === position.y || x === position.x) && board[y][x] === 'E') {
                    return {x, y}
                }
            }
        }
        return false;
    }
    bishop(board, position) {
        let amplitude = -position.y;
        for (let y = 0; y < board.length; y++) {
            let firstExpectedX = position.x - amplitude;
            let secondExpectedX = position.x + amplitude;
            if (firstExpectedX > -1 && firstExpectedX < 8 && board[y][firstExpectedX] === 'E') {
                return {
                    x: firstExpectedX,
                    y
                }
            }
            if (secondExpectedX > -1 && secondExpectedX < 8 && board[y][secondExpectedX] === 'E') {
                return {
                    x: secondExpectedX,
                    y
                }
            }
            amplitude++;
        }
        return false;
    }
    queen(board, position) {
        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if ((y === position.y || x === position.x) && board[y][x] === 'E') { 
                    return {x, y}
                }
            }
        }
        let amplitude = -position.y;
        for (let y = 0; y < board.length; y++) {
            let firstExpectedX = position.x - amplitude;
            let secondExpectedX = position.x + amplitude;
            if (firstExpectedX > -1 && firstExpectedX < 8 && board[y][firstExpectedX] === 'E') {
                return {
                    x: firstExpectedX,
                    y
                }
            }
            if (secondExpectedX > -1 && secondExpectedX < 8 && board[y][secondExpectedX] === 'E') {
                return {
                    x: secondExpectedX,
                    y
                }
            }
            amplitude++;
        }
        return false;
    }
    horse(board, position) {
        if (position.y - 2 > -1) {
            if (position.x - 1 > -1 && board[position.y - 2][position.x - 1] === 'E') {
                return {
                    x: position.x - 1,
                    y: position.y - 2
                }
            }
            if (position.x + 1 < 8 && board[position.y - 2][position.x + 1] === 'E') {
                return {
                    x: position.x + 1,
                    y: position.y - 2
                }
            }
        }
        if (position.y - 1 > -1) {
            if (position.x - 2 > -1 && board[position.y - 1][position.x - 2] === 'E') {
                return {
                    x: position.x - 2,
                    y: position.y - 1
                }
            }
            if (position.x + 2 < 8 && board[position.y - 1][position.x + 2] === 'E') {
                return {
                    x: position.x + 2,
                    y: position.y - 1
                }
            }
        }
        if (position.y + 1 < 8) {
            if (position.x - 2 > -1 && board[position.y + 1][position.x - 2] === 'E') {
                return {
                    x: position.x - 2,
                    y: position.y + 1
                }
            }
            if (position.x + 2 < 8 && board[position.y + 1][position.x + 2] === 'E') {
                return {
                    x: position.x + 2,
                    y: position.y + 1
                }
            }
        }
        if (position.y + 2 < 8) {
            if (position.x - 1 > -1 && board[position.y + 2][position.x - 1] === 'E') {
                return {
                    x: position.x - 1,
                    y: position.y + 2
                }
            }
            if (position.x + 1 < 8 && board[position.y + 2][position.x + 1] === 'E') {
                return {
                    x: position.x + 1,
                    y: position.y + 2
                }
            }
        }
        return false;
    }
    king(board, position) {
        if (position.y - 1 > -1) {
            if (board[position.y - 1][position.x] === 'E') {
                return {
                    x: position.x,
                    y: position.y - 1
                }
            }
            if (board[position.y - 1][position.x - 1] === 'E') {
                return {
                    x: position.x - 1,
                    y: position.y - 1
                }
            }
            if (board[position.y - 1][position.x + 1] === 'E') {
                return {
                    x: position.x + 1,
                    y: position.y - 1
                }
            }
        }
        if (position.y + 1 < 8) {
            if (board[position.y + 1][position.x] === 'E') {
                return {
                    x: position.x,
                    y: position.y + 1
                }
            }
            if (board[position.y + 1][position.x - 1] === 'E') {
                return {
                    x: position.x - 1,
                    y: position.y + 1
                }
            }
            if (board[position.y + 1][position.x + 1] === 'E') {
                return {
                    x: position.x + 1,
                    y: position.y + 1
                }
            }
        }
        if (position.x - 1 > -1) {
            if (board[position.y][position.x - 1] === 'E') {
                return {
                    x: position.x - 1,
                    y: position.y
                }
            }
            if (board[position.y][position.x + 1] === 'E') {
                return {
                    x: position.x + 1,
                    y: position.y
                }
            }
        }
        return false;
    }
    random() {
        const figures = [this.rook, this.bishop, this.horse, this.queen, this.king];
        let randomizer = () => Math.floor(Math.random() * 5);
        let firstFigure = randomizer();
        let secondFigure = randomizer();
        while(firstFigure === secondFigure) {
            secondFigure = randomizer();
        }
        return {
            firstFigure: figures[firstFigure],
            secondFigure: figures[secondFigure]
        }
    }
}

class PositionRandomizer {
    randomizer() {
        return Math.floor(Math.random() * 8);
    }
    init() {
        return {
            x: this.randomizer(),
            y: this.randomizer()
        }
    }
}

class App {
    constructor() {
        this.chessboard = new Chessboard;
        this.figures = new Figures;
        this.position = new PositionRandomizer;
    }
    setPositions() {
        let firstFigure = this.position.init();
        let secondFigure = this.position.init();
        while(firstFigure.x === secondFigure.x && firstFigure.y === secondFigure.y) {
            secondFigure = this.position.init();
        }
        return {
            firstFigure,
            secondFigure
        }
    }
    prepareBoard(enemyPosition) {
        let board = this.chessboard.init();
        board[enemyPosition.y][enemyPosition.x] = 'E';
        return board;
    }
    init() {
        let positions = this.setPositions();
        let figures = this.figures.random();
        let firstBeating = this.prepareBoard(positions.firstFigure);
        let secondBeating = this.prepareBoard(positions.secondFigure);
        let firstResult = figures.firstFigure(secondBeating, positions.firstFigure);
        let secondResult = figures.secondFigure(firstBeating, positions.secondFigure);
        console.log(`First figure is: ${figures.firstFigure.name}, at ${positions.firstFigure.x},${positions.firstFigure.y}.`);
        console.log(`Second figure is: ${figures.secondFigure.name}, at ${positions.secondFigure.x},${positions.secondFigure.y}.`);
        console.log('First figure can beat second figure:', firstResult);
        console.log('Second figure can beat first figure:', secondResult);
    }
}

const app = new App;
app.init();
