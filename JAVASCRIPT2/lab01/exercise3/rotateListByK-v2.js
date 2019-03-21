/* Write a function that rotates a list by k elements. For example [1,2,3,4,5,6]
rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list.*/

const data = [1,2,3,4,5,6];

class ListRotator {
    constructor(list, k) {
        this.list = list;
        this.k = k;
    }
    get rotateListByK() {
        return this.list.concat(this.list.splice(0, this.k));
    }
};

const rotatedList = new ListRotator(data, 2);
console.log(rotatedList.rotateListByK);