/**
 * Napisz test funkcji 'indexOf' w tablicy
 * przykład tablicy: [ 1, 4, 20, 5 ]
*/

describe('should return -1 when not found', () => {
    test('checks if 1 returns 0', () => {
        expect([ 1, 4, 20, 5 ].indexOf(1)).toBe(0);
    });
    test('checks if 21 returns -1', () => {
        expect([ 1, 4, 20, 5 ].indexOf(21)).toBe(-1);
    });
});
