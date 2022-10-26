const recursiveRange = require('./recursiveRange');

test('recursiveRange', () => {
  expect(recursiveRange(6)).toBe(21);
  expect(recursiveRange(10)).toBe(55);
});
