const letters = [
    ["a", ".-"],
    ["b", "-..."],
    ["c", "-.-."],
    ["d", "-.."],
    ["e", "."],
    ["f", "..-."],
    ["g", "--."],
    ["h", "...."],
    ["i", ".."],
    ["j", ".---"],
    ["k", "-.-"],
    ["l", ".-.."],
    ["m", "--"],
    ["n", "-."],
    ["o", "---"],
    ["p", ".--."],
    ["q", "--.-"],
    ["r", ".-."],
    ["s", "..."],
    ["t", "-"],
    ["u", "..-"],
    ["v", "...-"],
    ["w", ".--"],
    ["x", "-..-"],
    ["y", "-.--"],
    ["z", "--.."],
    ["1", ".----"],
    ["2", "..---"],
    ["3", "...--"],
    ["4", "....-"],
    ["5", "....."],
    ["6", "-...."],
    ["7", "--..."],
    ["8", "---.."],
    ["9", "----."],
    ["0", "-----"],
    [".", ".-.-.-"],
    [",", "--..--"],
    ["'", ".----."],
    ["_", "..--.-"],
    [":", "---..."],
    [";", "-.-.-."],
    ["?", "..--.."],
    ["!", "-.-.--"],
    ["-", "-....-"],
    ["+", ".-.-."],
    ["/", "-..-."],
    ["(", "-.--."],
    [")", "-.--.-"],
    ["=", "-...-"],
    ["@", ".--.-."],
    [" ", "/"],
    ["ą", ".-.-"],
    ["ć", "-.-.."],
    ["ę", "..-.."],
    ["é", "..-.."],
    ["ł", ".-..-"],
    ["ń", "--.--"],
    ["ó", "---."],
    ["ś", "...-..."],
    ["ż", "--..-."],
    ["ź", "--..-"]
];

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

//-----------------------------------------------------------------------------------------------

class App {
    constructor() {
        this.recognizer = new Recognizer(letters);
        this.translator = new Translate(letters);

    }
    automaticTranslate (text) {
        if (this.recognizer.isMorseCharacters(text)) {
            return this.translator.toLatin(text);
        } else {
            return this.translator.toMorse(text);
        }
    }
};

const app = new App();


const clearTextbox = () => {
    document.getElementById("textbox").innerHTML = '';
};

const getTranslate = () => {
    let usersText = document.getElementById("userInput").value;
    let translated = app.automaticTranslate(usersText);
    document.getElementById("textbox").innerHTML = translated;
};



