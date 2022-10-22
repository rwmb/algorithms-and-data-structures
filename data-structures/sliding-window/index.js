function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  
  // use hashmap with sliding window
  // run through all characters
  // increase right
  // if occurence already, remove all lefts from hash and move left to index found
  // else hash[char] = new right -> add char to a hashmap with index of occurence
  
  const hashed = new Map();
  let left = 0, right = 0;
  let max = 0;
  let substring = '';

  while(right < str.length) {
    // get new substring
    substring = str.slice(left, right);
    // console.log('current substring', substring);
    const char = str[right];
    if (hashed.has(char)) {
      // clear characters until current character
      const currentPosition = hashed.get(char);
      do {
        hashed.delete(str[left]);
        left++;
      } while(left <= currentPosition) 
    }

    // set current character in map to be the right pointer
    hashed.set(char, right);

    // change max if amount is bigger
    max = hashed.size > max ? hashed.size : max;
    // increase right
	  right++;
  }

  return max;
};

module.exports = findLongestSubstring;
