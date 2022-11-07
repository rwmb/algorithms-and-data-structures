const mergeArrays = require('./merge-arrays');

test('mergeArrays', async () => {
  expect(mergeArrays([1, 3, 5, 7], [2, 4, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(mergeArrays([-5, 0, 1, 3, 7], [1, 5, 7, 21])).toEqual([-5, 0, 1, 1, 3, 5, 7, 7, 21]);
  expect(mergeArrays([1], [])).toEqual([1]);
  expect(mergeArrays([], [1])).toEqual([1]);
  expect(mergeArrays([0, 1, 2, 3, 4, 5], [-1])).toEqual([-1, 0, 1, 2, 3, 4, 5]);
  expect(mergeArrays([0, 1, 2, 3, 4, 5], [3])).toEqual([0, 1, 2, 3, 3, 4, 5]);
  expect(mergeArrays([0, 1, 2, 3, 4, 5], [50])).toEqual([0, 1, 2, 3, 4, 5, 50]);
});