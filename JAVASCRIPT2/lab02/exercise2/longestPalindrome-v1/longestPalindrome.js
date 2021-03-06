/*	Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.*/

const data = 'kajak';
const data2 = 'inni';
const data3 = 'kaajaak';

const palindromicSubstringFinder = (text) => {

    const stringSplitter = (text) => {
        return text.split('');
    };

    const palindromeFinder = (array) => {
        let palindromesArray = [];
    
        for (let i = 0; i < array.length; i++) {
            if (array[i] === array[i-1]) {
                palindromesArray.push([i, true]);
            }
            if (array[i] === array[i-2]) {
                palindromesArray.push([i, false]);
            };
        };
        return palindromesArray;
    };

    const separator = (stringArray, middleIndex, isEven) => {
        let forward = [];
        let middle;
        let backward = [];

        if (isEven) {
            middle = null;
            for (let i = middleIndex; i < stringArray.length; i++) {
                forward.push(stringArray[i]);
            }
            for (let j = 0; j < middleIndex; j++) {
                backward.push(array[j]);
            }
            backward.reverse();
        } else {
            middle = stringArray[middleIndex - 1];
            stringArray.splice(middleIndex - 1, 1);
            for (let i = middleIndex -1; i < stringArray.length; i++) {
                forward.push(stringArray[i]);
            }
            for (let j = 0; j < middleIndex - 1; j++) {
                backward.push(array[j]);
            }
            backward.reverse();
        }
        return [forward, backward, middle];
    };

    const comparator = (arrays) => {
        let longer;
        let shorter;
        let middle = arrays[2];
        if (arrays[0].length > arrays[1].length) {
            longer = arrays[0];
            shorter = arrays[1];
        } else {
            longer = arrays[1];
            shorter = arrays[0];
        }
        let halfOfPalindrome = [];

        if (middle === null) {
            for (let i = 0; i < shorter.length; i++) {
                if (shorter[i] === longer[i]) {
                    halfOfPalindrome.push(shorter[i]);
                    halfOfPalindrome.unshift(shorter[i]);
                }
            }
        } else {
            halfOfPalindrome.push(middle);
            for (let i = 0; i < shorter.length; i++) {
                if (shorter[i] === longer[i]) {
                    halfOfPalindrome.push(shorter[i]);
                    halfOfPalindrome.unshift(shorter[i]);
                }
            }
        }
        return halfOfPalindrome;
    };

    let array = stringSplitter(text);
    let palindromesArray = palindromeFinder(array);
    let separated = '';
    for (let i = 0; i < palindromesArray.length; i++) {
        let sep = separator(array, palindromesArray[i][0], palindromesArray[i][1]);
        let comp = comparator(sep)
        if (comp.length > separated.length) {
            separated = comp.join('');
        }        
    }
    return separated;
};

console.log(palindromicSubstringFinder('karakis'));
