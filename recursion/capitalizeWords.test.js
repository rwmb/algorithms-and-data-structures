const capitalizeWords = require('./capitalizeWords');


test('capitalizeWords', () => {
  expect(capitalizeWords(['i', 'am', 'learning', 'recursion'])).toEqual(['I', 'AM', 'LEARNING', 'RECURSION']);
});
