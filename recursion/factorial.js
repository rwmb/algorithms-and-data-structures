

function factorial(num){
  // REQUIREMENTS
  // return the factorial of the number num
  
  // CONSTRAINTS
  // 0! is 1
  // no negative numbers
  
  // STEPS
  // base case of num 0 and 1 returning 1
  // return multiplication of num times factorial of num - 1
  
  if (num < 2) return 1;
  
  return num * factorial(num - 1);
};

module.exports = factorial;
