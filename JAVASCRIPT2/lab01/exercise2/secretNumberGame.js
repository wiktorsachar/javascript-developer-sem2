/* Write a guessing game where the user has to guess a secret number. 
After every guess the program tells the user whether their number was too large 
or too small. At the end the number of tries needed should be printed. It counts
only as one try if they input the same number multiple times consecutively. */

const fs = require('fs');

const createData = (numberOfUserTries, rangeOfNumbers) => {
    let secretNumber = Math.floor(Math.random() * (rangeOfNumbers + 1));
    let newGame = [secretNumber, numberOfUserTries, rangeOfNumbers, []]; // it's a structure of data, last element of this array is an array of used user's input numbers
    try {
        let continueGuessing = JSON.parse(fs.readFileSync('./secretNumberData.json'));
        if (continueGuessing[1] === 0 || continueGuessing[1] === 'win') { // if number of left user tries equals 0 or user has won a game, the data is reseted
            return newGame;
        } else {
            return continueGuessing;
        }
    } catch {
        return newGame;
    }
}; // function loads a data json of previous game or creates a new data array if number of tries is expired


const guessNumber = (usersInput, dataInput) => {

    const isTheSameNumber = () => {
        let match = dataInput[3].includes(usersInput);
        if (!match) {
            dataInput[1] = dataInput[1] - 1;
        }
    }; // checks if user used this number before - if not, number of tries decreases

    if (!usersInput || !typeof usersInput === 'number' || usersInput < 0 || usersInput > dataInput[2]) {
        console.log(`Type a number between 0 - ${dataInput[2]}`); //checks if users input is typed, if it's a number and if it's in a range
    } else {
        if (usersInput == dataInput[0]) {
            console.log(`Correct! Your number: ${usersInput} is the Secret Number!`);
            dataInput[1] = 'win';
        } else if (usersInput > dataInput[0]) {
            console.log(`Wrong! Your number: ${usersInput} is too large!`);
            isTheSameNumber();
            dataInput[3].push(usersInput);
        } else if (usersInput < dataInput[0]) {
            console.log(`Wrong! Your number: ${usersInput} is too small!`);
            isTheSameNumber();
            dataInput[3].push(usersInput);
        }
    };

    if (dataInput[1] === 0) {
        console.log(`You loose! The Secret Number was ${dataInput[0]}.`);
    } else if (dataInput[1] === 'win') {
        console.log('Congratulations!');
    } else {
        console.log(`You've got ${dataInput[1]} more tries left!`);
    };

    fs.writeFileSync('./secretNumberData.json', JSON.stringify(dataInput));
    
};


let data = createData(4, 20);
guessNumber(process.argv[2], data);
