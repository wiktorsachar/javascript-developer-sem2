/* Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’*/
const firstWord = 'karol';
const secondWord = 'rolki';

const substringer = (sentence) => {
    const partSubstringer = (sentence) => {
        let substrings = [];
        while (sentence.length !== 0) {
            substrings.push(sentence);
            sentence = sentence.substring(0, sentence.length - 1);
        };
        return substrings;
    };
    
    const mainSubstringer = (sentence) => {
        let x = sentence.split("").reverse().join("");
        let substrings = [];
        while (x.length !== 0) {
            substrings.push(x.split("").reverse().join(""));
            x = x.substring(0, x.length - 1);
        };
        return substrings;
    };

    let substrings = mainSubstringer(sentence).map(e => partSubstringer(e));
    let merged = [].concat.apply([], substrings);
    return merged;
};

const commonSubstrings = (first, second) => {
    let commonSubstrings = [];
    const condition = (arr, searching) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes(searching)) {
                return true;
            } else {
                return false;
            };
        };
    };
    for (let i = 0; i < first.length; i++) {
        if (condition(second, first[i])) {
            commonSubstrings.push(first[i]);
        };
    };
    for (let i = 0; i < second.length; i++) {
        if (condition(first, second[i])) {
            commonSubstrings.push(second[i]);
        };
    };
    return commonSubstrings;
};

const compareSubstrings = (array) => {
    let longest = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        };
    };
    return longest;
};

console.log(compareSubstrings(commonSubstrings(substringer(firstWord),substringer(secondWord))));