/**
 * Zastosujmy metodę TDD.
 * Stwórzmy test oraz funkcję która pozwoli na znalezienie maksymalnej wartości w zbiorze
 */

const max = array => {
  let maxValue = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return maxValue;
};

const array = [1, -5, 7, 10, -199, 200, 11];

describe("Max in array", () => {
  test('checks if max value of an array is 200', () => {
      expect(max(array)).toBe(200);
  });
});
