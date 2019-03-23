/* Write a program that prints all prime numbers in given range. Take sub from 1-100.*/

const getRange = (min, max) => {
  let rangeArr = [];
  for (let i = min; i < max + 1; i++) {
    rangeArr.push(i);
  }
  return rangeArr;
};

const isNumberPrimal = x => {
  let dividers = [];
  let sqrt = Math.sqrt(x);
  for (let i = 2; i < sqrt + 1; i++) {
    if (x % i == 0) {
      dividers.push(i);
    }
  }
  if (dividers.length === 0 && x > 1 && Number.isInteger(x)) {
    return true;
  } else {
    return false;
  }
};

const printPrimals = (min, max) => {
  let range = getRange(min, max);
  let primals = [];
  for (let i = 0; i < range.length; i++) {
    if (isNumberPrimal(range[i])) {
      primals.push(range[i]);
    }
  }
  return primals;
};

console.log(printPrimals(1, 100));
