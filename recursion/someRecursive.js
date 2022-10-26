// SAMPLE INPUT / OUTPUT
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
function someRecursive(arr, callback){
  // add whatever parameters you deem necessary - good luck!

  // REQUIREMENTS
  // array and callback as params,
  // if callback returns true, function returns true
  // else return false
  
  // STEPS
  // call the callback with the param
  // if false, call again, else return true
  // base case is callback returning true and arr.length === 0

  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  
  return someRecursive(arr.slice(1), callback);
};

module.exports = someRecursive;
