class PalindromeFinder {
    palindromeFinder(array) {
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
};

module.exports = PalindromeFinder;