function reverse(str, position){
  // add whatever parameters you deem necessary - good luck!
  
  // STEPS
  // create empty string
  // base case is position equals to zero
  // pass in current position to reverse
  // being the last positions
  // push to new string and return new array
  if (position === 0) return str[0];
  let current = position || str.length - 1;
  return str[current] + reverse(str, current - 1);
};

module.exports = reverse;
