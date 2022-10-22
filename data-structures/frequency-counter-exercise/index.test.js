const areThereDuplicates = require('./index');

test('are there duplicates?', () => {
  expect(areThereDuplicates(1, 2, 3, 4, 5)).toBe(false);
  expect(areThereDuplicates('a', 'b', 'c')).toBe(false);
  expect(areThereDuplicates(1, 2, 3, 'a', 'b', 'c')).toBe(false);
  expect(areThereDuplicates(1, 2, 3, 1)).toBe(true);
  expect(areThereDuplicates('a', 'b', 'c', 'd', 'a')).toBe(true);
});
