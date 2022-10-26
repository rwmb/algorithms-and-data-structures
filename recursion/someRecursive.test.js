const someRecursive = require('./someRecursive');

const isOdd = val => val % 2 !== 0;

test('someRecursive', () => {
  expect(someRecursive([1,2,3,4], isOdd)).toBe(true);
  expect(someRecursive([4,6,8,9], isOdd)).toBe(true);
  expect(someRecursive([4,6,8], isOdd)).toBe(false);
  expect(someRecursive([4,6,8], val => val > 10)).toBe(false);
});

