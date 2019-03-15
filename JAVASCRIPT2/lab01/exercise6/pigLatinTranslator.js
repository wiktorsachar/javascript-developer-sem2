/* Write function that translates a text to Pig Latin and back. English is translated 
to Pig Latin by taking the first letter of every word, moving it to the end of the word and
adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.*/

const data = "The quick brown fox";
const data2 = "Hetay uickqay rownbay oxfay";

const pigLatinToEnglish = (textToTranslate) => {
    let arrayOfStrings = textToTranslate.split(' ');
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let stringLowerCase = arrayOfStrings[i].toLowerCase();
        let stringSplit = stringLowerCase.split('');
        let firstLetter = stringSplit.splice(0,1);
        stringSplit.push(firstLetter[0],'ay');
        arrayOfStrings[i] = stringSplit.join('');
    };
    let firstString = arrayOfStrings[0].split('');
    firstString[0] = firstString[0].toUpperCase();
    arrayOfStrings[0] = firstString.join('');
    return arrayOfStrings.join(' ');
}

const englishToPigLatin = (textToTranslate) => {
    let arrayOfStrings = textToTranslate.split(' ');
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let stringLowerCase = arrayOfStrings[i].toLowerCase();
        let stringSplit = stringLowerCase.split('');
        stringSplit.splice(stringSplit.length - 2, 2);
        let lastLetter = stringSplit.pop();
        stringSplit.unshift(lastLetter);
        arrayOfStrings[i] = stringSplit.join('');
    };
    let firstString = arrayOfStrings[0].split('');
    firstString[0] = firstString[0].toUpperCase();
    arrayOfStrings[0] = firstString.join('');
    return arrayOfStrings.join(' ');
}

console.log(pigLatinToEnglish(data));
console.log(englishToPigLatin(data2));

