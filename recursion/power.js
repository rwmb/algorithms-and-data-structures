// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
  // REQUIREMENTS
  // return the base times itself as many times as the exponent
  
  // CONSTRAINTS
  // no negative numbers
  // base 0 always return 0
  // base 1 and exponent 0 always return 1

  if (base === 0) return 0;
  if (base === 1 || exponent === 0) return 1;
  if (exponent === 1) return base;
  
  return base * power(base, exponent - 1);
};

module.exports = power;
