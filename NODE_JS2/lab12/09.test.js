/** 
 * Napisz test funkcji 'reverse' odpowiedzialnej za odwrócenie tekstu lub tablicy
 */
const { reverse } = require('./lib');

describe('checks if reverse function reverses text or an array', () => {
    test('checks if [1,2,3] returns [3,2,1]', () => {
        expect(reverse([1,2,3])).toEqual([3,2,1]);
    });
    test('checks if "marcin pij wodę" returns "ędow jip nicram"', () => {
        expect(reverse("marcin pij wodę")).toBe("ędow jip nicram");
    });
});