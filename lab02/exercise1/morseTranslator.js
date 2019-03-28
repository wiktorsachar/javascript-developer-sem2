/* Write a program that automatically converts English text to Morse code and vice versa.*/

const fs = require('fs');
const letters = JSON.parse(fs.readFileSync('./letters.json'));

const morseCharacter = (latinCharacter, decryptor) => {
    for (let i = 0; i < decryptor.length; i++) {
        if (decryptor[i][0] === latinCharacter) {
            return decryptor[i][1];
        }        
    }
};

const latinCharacter = (morseCharacter, decryptor) => {
    for (let i = 0; i < decryptor.length; i++) {
        if (decryptor[i][1] === morseCharacter) {
            return decryptor[i][0];
        }        
    }
};

const toMorse = (text, decryptor) => {
    let array = text.split('');
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
        array[i] = morseCharacter(array[i], decryptor);     
    }
    return array.join(' ');
};

const toLatin = (text, decryptor) => {
    let array = text.split(' ');
    for (let i = 0; i < array.length; i++) {
        array[i] = latinCharacter(array[i], decryptor);     
    }
    return array.join(' ');
};

let morseExample = '.-.. --- .-.. / .--- .- -.- .-.- / -... . -.- .-';
let latinExample = 'baba jaga zjadła jaśka i małgosię';

console.log(toLatin(morseExample, letters));
console.log(toMorse(latinExample, letters));
