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

module.exports = AnalogLetterFinder;