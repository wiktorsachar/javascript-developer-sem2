/* Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’*/

const example1 = 'bogurodzidzica';
const example2 = 'urodzilas';

const splitter = (string1, string2) => {
    let first = string1.split('');
    let second = string2.split('');
    return {
        first,
        second
    };
};

const uniqueSubstrings = (arrays) => {
    let first = arrays.first;
    let second = arrays.second;
    let newFirst = [];
    let newSecond = [];
    let current = [];
    for (let i = 0; i < first.length; i++) {
        if (second.includes(first[i])) {
            current.push(first[i]);
        } else {
            newFirst.push(current.join(''));
            current = [];
        };
        if (i === first.length - 1 && current.length > 0) {
            newFirst.push(current.join(''));
            current = [];
        };
    };
    for (let i = 0; i < second.length; i++) {
        if (first.includes(second[i])) {
            current.push(second[i]);
        } else {
            newSecond.push(current.join(''));
            current = [];
        };
        if (i === first.length - 1 && current.length > 0) {
            newSecond.push(current.join(''));
            current = [];
        };
    };
    return {
        first: newFirst,
        second: newSecond
    };
};

const commonSubstrings = (arrays) => {
    let first = arrays.first;
    let second = arrays.second;
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
        //if (second.includes(first[i]))
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






let a = splitter(example1, example2);
let b = uniqueSubstrings(a);
let c = commonSubstrings(b);
let d = compareSubstrings(c);
console.log(d);
