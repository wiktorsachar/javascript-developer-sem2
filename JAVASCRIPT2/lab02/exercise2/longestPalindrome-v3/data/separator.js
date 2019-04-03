class Separator {
    separator(stringArray, middleIndex, isEven, array) {
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
        };
        return [forward, backward, middle];
    };
};

module.exports = Separator;