class Comparator {
    comparator(arrays) {
        let longer;
        let shorter;
        let middle = arrays[2];
        if (arrays[0].length > arrays[1].length) {
            longer = arrays[0];
            shorter = arrays[1];
        } else {
            longer = arrays[1];
            shorter = arrays[0];
        };
        let halfOfPalindrome = [];

        if (middle === null) {
            for (let i = 0; i < shorter.length; i++) {
                if (shorter[i] === longer[i]) {
                    halfOfPalindrome.push(shorter[i]);
                    halfOfPalindrome.unshift(shorter[i]);
                };
            };
        } else {
            halfOfPalindrome.push(middle);
            for (let i = 0; i < shorter.length; i++) {
                if (shorter[i] === longer[i]) {
                    halfOfPalindrome.push(shorter[i]);
                    halfOfPalindrome.unshift(shorter[i]);
                };
            };
        };
        return halfOfPalindrome;
    };
};

module.exports = Comparator;