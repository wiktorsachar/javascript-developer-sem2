/** 
 * Napisz test funkcji 'Math.abs'
 */

describe('Math.abs test', () => {
    test('should return 1', () => {
        expect(Math.abs(-1)).toBe(1);
    });
    test('should return 2', () => {
        expect(Math.abs(-2)).toBe(2);
    });
});