/* Write a code that takes a number and returns a list of its digits. So for 2342 
it should return [2,3,4,2]. Has to work for both number and string.*/

class NumberToDigits {
    constructor(userNumber) {
        this.userNumber = userNumber;
    }
    get splitNumbers () {
        let num = Number(this.userNumber);
        if (!isNaN(num)) {
        let numArray = num.toString().split('');
        for (let i = 0; i < numArray.length; i++) {
            numArray[i] = Number(numArray[i]);
        };
        return numArray;
        };
        console.log('Please, type a number!');
    }
}

let lol = new NumberToDigits(process.argv[2]);

console.log(lol.splitNumbers);
