const funcs = require('./index');

test('getDigit', async () => {
  expect(funcs.getDigit(1442, 0)).toBe(2);
  expect(funcs.getDigit(2, 0)).toBe(2);
  expect(funcs.getDigit(1442, 1)).toBe(4);
  expect(funcs.getDigit(1442, 2)).toBe(4);
  expect(funcs.getDigit(1442, 3)).toBe(1);
  expect(funcs.getDigit(500, 1)).toBe(0);
});

test('countDigit', async () => {
  expect(funcs.countDigit(1442)).toBe(4);
  expect(funcs.countDigit(12)).toBe(2);
  expect(funcs.countDigit(0)).toBe(1);
  expect(funcs.countDigit(144442)).toBe(6);
});

test('mostDigits', async () => {
  expect(funcs.mostDigits([111, 1, 11111, 24, 52, 9999])).toBe(5);
  expect(funcs.mostDigits([0, 1, 2, 3, 4, 5, 6])).toBe(1);
  expect(funcs.mostDigits([0])).toBe(1);
  expect(funcs.mostDigits([])).toBe(0);
});


test('radixSort', async () => {
  expect([1, 5, 3, 2, 4].radixSort()).toEqual([1, 2, 3, 4, 5]);
  expect([10, 55, 33, 21, 4, 152].radixSort()).toEqual([4, 10, 21, 33, 55, 152]);
  expect([1].radixSort()).toEqual([1]);
  expect([].radixSort()).toEqual([]);
  // expect([3, 2, 1, 0, -1, -2, -3].radixSort()).toEqual([-3, -2, -1, 0, 1, 2, 3]);
});
