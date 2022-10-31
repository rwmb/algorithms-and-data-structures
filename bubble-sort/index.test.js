require('../array/prototype');
require('./index');

test('bubbleSort', () => {
  expect([1, 5, 3, 2, 4].bubbleSort()).toEqual([1, 2, 3, 4, 5]);
  expect([10, 55, 33, 21, 4, 152].bubbleSort()).toEqual([4, 10, 21, 33, 55, 152]);
  expect([1].bubbleSort()).toEqual([1]);
  expect([].bubbleSort()).toEqual([]);
  expect([3, 2, 1, 0, -1, -2, -3].bubbleSort()).toEqual([-3, -2, -1, 0, 1, 2, 3]);
});