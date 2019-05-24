/** 
 * Napisz test funkcji 'sum' odpowiedzialnej za dodawanie 2 licz
 */
const { sum } = require('./lib');

describe('sum function test', () => {
    test('checks if 2 + 2 equals 4', () => {
        expect(sum(2,2)).toBe(4);
    });
});

