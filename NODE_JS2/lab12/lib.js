//from: https://github.com/piotar

const sum = (a, b) => a + b;

const sumMany = (...args) => args.reduce((sum, next) => sum + next);

const multi = (...args) => args.reduce((sum, next) => sum * next);

const getLast = array => {
    const length = array ? array.length : 0;
    return length ? array[length - 1] : undefined;
};

const inRange = (number, start, end = 0) => {
    const _start = typeof end === 'undefined' ? 0 : start;
    const _end = _start > 0 ? end : start;
    return start < number && number < end;
};

const reverse = (arg) => Array.isArray(arg) ? arg.reverse() : String(arg).split('').reverse();

const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Divide by 0');
    }
    return a / b;
};


module.exports = {
    sum,
    sumMany,
    multi,
    getLast,
    inRange,
    reverse,
    divide,
};