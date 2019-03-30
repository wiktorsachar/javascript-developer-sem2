const Translate = require('./translator');

const translation = new Translate();
const morseCodeExample = '-- .- -- -- .- / -- .. .- -.-.--';
const plainTextExample = 'o kurczaki, jestem morsem!';

console.log(translation.toMorse(plainTextExample));
console.log(translation.toLatin(morseCodeExample));
