
function productOfArray(arr, remaining) {
  // REQUIREMENTS
  // return the product of all numbers in array
  
  // CONSTRAINTS
  // all positive numbers
  // if 0, return 0
  // if none remaining, return 1

  if (arr.length === 1) return arr[0];
  
  return arr[0] * productOfArray(arr.slice(1))
};

module.exports = productOfArray;

