/* Write a code that takes a number and returns a list of its digits. So for 2342 
it should return [2,3,4,2]. Has to work for both number and string.*/

const numberToDigits = (userNumber) => {
    let num = Number(userNumber);
    if (!isNaN(num)) {
        let numArray = num.toString().split('');
        for (let i = 0; i < numArray.length; i++) {
            numArray[i] = Number(numArray[i]);
        }
        return numArray;
    }
    console.log('Please, type a number!');
};

console.log(numberToDigits(process.argv[2]));
