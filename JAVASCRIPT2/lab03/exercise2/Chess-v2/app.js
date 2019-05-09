/* Chess board. Program is to choose at random one of the chess piece (except the pawn) and place it 
at the random spot on the board. After placing any piece (except first one) check all present pieces move 
ranges and see if any can reach other piece. Is so Give that pieces position and quit program. */

//-v2 - divided version;

const Chessboard = require('./class/chessboard');
const Figures = require('./class/figures');
const PositionRandomizer = require('./class/position');

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
