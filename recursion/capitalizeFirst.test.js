const capitalizeFirst = require('./capitalizeFirst');

test('capitalizeFirst', () => {
  expect(capitalizeFirst(['car','taco','banana'])).toEqual(['Car','Taco','Banana']);
  expect(capitalizeFirst(['toyota', 'honda', 'mitsubishi', 'porshe'])).toEqual(['Toyota', 'Honda', 'Mitsubishi', 'Porshe']);
});

