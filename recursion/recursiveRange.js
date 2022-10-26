
function recursiveRange(num){
  // REQUIREMENTS
  // return a sum of all numbers from 0 to num
  
  // CONSTRAINTS
  // only positive numbers
  
  // STEPS
  // base case of num === 1
  
  if (num < 2) return num;
  
  return num += recursiveRange(num - 1);
};

module.exports = recursiveRange;