require('./index');

test('quickSort', async () => {
  expect([1, 5, 3, 2, 4].quickSort()).toEqual([1, 2, 3, 4, 5]);
  expect([10, 55, 33, 21, 4, 152].quickSort()).toEqual([4, 10, 21, 33, 55, 152]);
  expect([1].quickSort()).toEqual([1]);
  expect([].quickSort()).toEqual([]);
  expect([3, 2, 1, 0, -1, -2, -3].quickSort()).toEqual([-3, -2, -1, 0, 1, 2, 3]);
});
