/* Write a class that prints the list of the first n Fibonacci numbers. 
The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can
be computed by adding the n-th and the n-1-th Fibonacci number. The first 
few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.*/

class Fibonacci {
    constructor(n) {
        this.n = n;
    }
    get takeNumbers() {
        let fibonacciNumbers = [1, 1];
        if (Number.isInteger(this.n) && this.n >= 2) {
            while (this.n !== fibonacciNumbers.length) {
                fibonacciNumbers[fibonacciNumbers.length] = fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2];
            }
            return fibonacciNumbers;
        } else if (Number.isInteger(this.n) && this.n >= 0 && this.n < 2) {
            let numbersToDisplay = [];
            let i = 0;
            while (i !== this.n) {
                numbersToDisplay.push(fibonacciNumbers[i]);
                i++;
            }
            return numbersToDisplay;
        } else {
            return 'Please, type a valid number of sequence elements to display.'
        };
    }
}

const input = Number(process.argv[2]);
const result = new Fibonacci(input);
console.log(result.takeNumbers);