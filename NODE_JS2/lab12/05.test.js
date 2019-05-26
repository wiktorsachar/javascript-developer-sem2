/** 
 * Napisz test funkcji 'sumMany' odpowiedzialnej za dodawanie wielu liczb
 */
const { sumMany } = require('./lib');

describe('sumMany function test', () => {
    test('checks if 1 + 2 + 3 + 4 equals 10', () => {
        expect(sumMany(1,2,3,4)).toBe(10);
    });
});
