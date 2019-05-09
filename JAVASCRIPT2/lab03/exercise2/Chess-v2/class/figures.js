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

module.exports = Figures;
