// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(nth){
  // add whatever parameters you deem necessary - good luck!
  // REQUIREMENT
  // return the nth number in fib sequence
  
  // CONSTRAINTS
  // numbers are positive
  // first number is 1
  
  // STEPS
  // base case of 1 return 1
  // return fib of nth - 1
  
  if(nth < 3) return 1;
  return fib(nth - 1) + fib(nth - 2);
};

module.exports = fib;
