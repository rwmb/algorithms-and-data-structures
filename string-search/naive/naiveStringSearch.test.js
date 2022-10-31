const stringSearch = require('./naiveStringSearch');

test('stringSearch', () => {
  expect(stringSearch('buia buia dont mind if i duia', 'uia')).toBe(3);
  expect(stringSearch('loooooooooooooooooong', 'z')).toBe(0);
  expect(stringSearch('do', 'doodle')).toBe(0);
  expect(stringSearch('bing bong bing bong bing bong bing bong', 'bong')).toBe(4);
  expect(stringSearch('zoo boo mafoo booooooo', 'oo')).toBe(9);
});