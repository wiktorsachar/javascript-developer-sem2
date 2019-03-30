const AnalogLetterFinder = require('./analogLetterFinder');

class Translate {
    constructor(decryptor) {
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

module.exports = Translate;
