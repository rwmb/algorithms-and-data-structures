const isPalindrome = require('./palindrome');

test('isPalindrome', () => {
  expect(isPalindrome('awesome')).toBe(false);
  expect(isPalindrome('foobar')).toBe(false);
  expect(isPalindrome('tacocat')).toBe(true);
  expect(isPalindrome('amanaplanacanalpanama')).toBe(true);
  expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false);
});

