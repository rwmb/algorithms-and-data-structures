const flatten = require('./flatten');

test('flatten', () => {
  expect(flatten([1, 2, 3, [4, 5] ])).toEqual([1, 2, 3, 4, 5]);
  expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
  expect(flatten([[1],[2],[3]])).toEqual([1,2,3]);
  expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1,2,3]);
});
