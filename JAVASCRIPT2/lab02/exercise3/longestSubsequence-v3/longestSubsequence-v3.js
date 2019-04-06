/* Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’*/

class Subsequence {
    static partSubstringer(sentence) {
        let substrings = [];
        while (sentence.length !== 0) {
            substrings.push(sentence);
            sentence = sentence.substring(0, sentence.length - 1);
        }
        return substrings;
    }
    
    static mainSubstringer(sentence) {
        let x = sentence.split("").reverse().join("");
        let substrings = [];
        while (x.length !== 0) {
            substrings.push(x.split("").reverse().join(""));
            x = x.substring(0, x.length - 1);
        }
        return substrings;
    }

    static getAllSubstrings(sentence) {
        let substrings = this.mainSubstringer(sentence).map(e => this.partSubstringer(e));
        let merged = [].concat.apply([], substrings);
        return merged;
    }

    static commonSubstrings(first, second) {
        let commonSubstrings = [];
        const condition = (arr, searching) => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].includes(searching)) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        for (let i = 0; i < first.length; i++) {
            if (condition(second, first[i])) {
                commonSubstrings.push(first[i]);
            }
        }
        for (let i = 0; i < second.length; i++) {
            if (condition(first, second[i])) {
                commonSubstrings.push(second[i]);
            }
        }
        return commonSubstrings;
    }

    static compareSubstrings(array) {
        let longest = '';
        for (let i = 0; i < array.length; i++) {
            if (array[i].length > longest.length) {
                longest = array[i];
            }
        }
        return longest;
    }

    static getTheLongest(firstWord, secondWord) {
        let firstWordSubstrings = this.getAllSubstrings(firstWord);
        let secondWordSubstrings = this.getAllSubstrings(secondWord);
        let commonSubstrings = this.commonSubstrings(firstWordSubstrings, secondWordSubstrings);
        let longestSubsequence = this.compareSubstrings(commonSubstrings);
        return longestSubsequence;
    }
}


let y = Subsequence.getTheLongest('karol','rolki');
console.log(y);



