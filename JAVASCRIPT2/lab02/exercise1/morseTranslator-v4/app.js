const Translate = require('./translator');
const letters = require('./decryptor');
const Recognizer = require('./recognizer');

const morseCodeExample = '-- .- -- -- .- / -- .. .- -.-.--';
const plainTextExample = 'o kurczaki, jestem morsem!';

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
console.log(app.automaticTranslate(morseCodeExample));
console.log(app.automaticTranslate(plainTextExample));

