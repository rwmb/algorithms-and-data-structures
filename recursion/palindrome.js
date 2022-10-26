

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  
  // REQUIREMENTS
  // return true if str is palindrome, false otherwiuse

  // STEPS
  // base case is letter different, return false, pos str/2, return true
  return isPalindromeHelper(str, 0);
};

function isPalindromeHelper(str, position) {
  if (position >= str.length / 2) return true;
  if (str[position] !== str[str.length - position - 1]) return false;
  return isPalindromeHelper(str, position + 1);
}

module.exports = isPalindrome;
