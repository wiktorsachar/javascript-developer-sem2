/* Write a function that rotates a list by k elements. For example [1,2,3,4,5,6]
rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list.*/

let data = [1,2,3,4,5,6];

const rotateListByK = (list, k) => {
    return list.concat(list.splice(0, k));
};

let rotatedList = rotateListByK(data, 2);
console.log(rotatedList);