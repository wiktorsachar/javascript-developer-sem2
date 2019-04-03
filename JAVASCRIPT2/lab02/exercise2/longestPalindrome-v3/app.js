/*	Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.*/

const StringSplitter = require('./data/splitter');
const PalindromeFinder = require('./data/finder');
const Separator = require('./data/separator');
const Comparator = require('./data/comparator');

class App {
    constructor(text) {
        this.text = text;
        this.array = new StringSplitter().stringSplitter(this.text);
        this.palindromeFinder = new PalindromeFinder;
        this.separator = new Separator;
        this.comparator = new Comparator;
    }

    run () {
        let palindromesArray = this.palindromeFinder.palindromeFinder(this.array);
        let separated = '';
        for (let i = 0; i < palindromesArray.length; i++) {
            let sep = this.separator.separator(this.array, palindromesArray[i][0], palindromesArray[i][1], this.array);
            let comp = this.comparator.comparator(sep)
            if (comp.length > separated.length) {
                separated = comp.join('');
            } ;       
        };
        return separated;
    };      
};

console.log(new App('karakis').run());
console.log(new App('baerren').run());
console.log(new App('kajak').run());
console.log(new App('inni').run());