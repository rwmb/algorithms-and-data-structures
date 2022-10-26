const reverse = require('./reverse');

test('reverse', () => {
  expect(reverse('awesome')).toBe('emosewa');
  expect(reverse('rithmschool')).toBe('loohcsmhtir');
});