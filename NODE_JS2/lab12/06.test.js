/** 
 * Napisz test funkcji 'multi' odpowiedzialnej za mnożenie wielu liczb
 */
const { multi } = require('./lib');

describe('multi function test', () => {
    test('checks if 1 * 2 * 3 * 4 equals 24', () => {
        expect(multi(1,2,3,4)).toBe(24);
    });
});
