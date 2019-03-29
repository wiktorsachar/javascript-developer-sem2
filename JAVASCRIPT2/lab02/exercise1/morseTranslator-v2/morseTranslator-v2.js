/* Write a program that automatically converts English text to Morse code and vice versa.*/

const fs = require('fs');
const letters = JSON.parse(fs.readFileSync('./letters.json'));

class AnalogLetterFinder {
    morseCharacter(latinCharacter, decryptor) {
        for (let i = 0; i < decryptor.length; i++) {
            if (decryptor[i][0] === latinCharacter) {
                return decryptor[i][1];
            }        
        }
    };
    
    latinCharacter(morseCharacter, decryptor) {
        for (let i = 0; i < decryptor.length; i++) {
            if (decryptor[i][1] === morseCharacter) {
                return decryptor[i][0];
            }        
        }
    };
};

class Translate {
    constructor(decryptor = letters) {
        this.decryptor = decryptor;
        this.analogLetterFinder = new AnalogLetterFinder;
    }

    toMorse(text) {
        let array = text.split('');
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].toLowerCase();
            array[i] = this.analogLetterFinder.morseCharacter(array[i], this.decryptor);     
        }
        return array.join(' ');
    };
    
    toLatin(text) {
        let array = text.split(' ');
        for (let i = 0; i < array.length; i++) {
            array[i] = this.analogLetterFinder.latinCharacter(array[i], this.decryptor);     
        }
        return array.join('');
    };
};

const translation = new Translate();
const morseCodeExample = '-- .- -- -- .- / -- .. .- -.-.--';
const plainTextExample = 'o kurczaki, jestem morsem!';

console.log(translation.toMorse(plainTextExample));
console.log(translation.toLatin(morseCodeExample));
