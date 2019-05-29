/** 
 * Napisz test funkcji 'getLast' odpowiedzialnej za pobieranie ostatniego elementu
 */
const { getLast } = require('./lib');

describe('getLast function test', () => {
    test('checks if last item in an array is 4', () => {
        expect(getLast([1,2,3,4])).toBe(4);
    });
});