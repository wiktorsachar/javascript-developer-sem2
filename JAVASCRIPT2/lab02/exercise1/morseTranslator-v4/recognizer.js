class Recognizer {
    constructor (decryptor) {
        this.decryptor = decryptor;
    };
    isMorseCharacters(text) {
        let array = text.split(' ');
        let counter = 0;
        for (let i = 0; i < array.length; i++) {
            let currentCharacter = array[i];
            for (let k = 0; k < this.decryptor.length; k++) {
                if (currentCharacter === this.decryptor[k][1]) {
                    counter++;
                    break;
                };
            };
        };
        if (counter === array.length) {
            return true;
        } else {
            return false;
        };
    };

};

module.exports = Recognizer;