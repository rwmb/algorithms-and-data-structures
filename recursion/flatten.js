// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr, arrHelper){
  // add whatever parameters you deem necessary - good luck!

  // STEPS
  // BASE CASE
  // if the length is 0, just return the top array
  // if the current entry is another array, flatten that too with a new array to solve

  // if it's a number, push to top array
  
  // remove that entry and return the next flattened result
  
  const newArr = arrHelper || [];

  if (arr.length === 0) return arrHelper;
  if (typeof arr[0] === 'number')
    newArr.push(arr[0]);
  else
    newArr.push(...flatten(arr[0]));

  return flatten(arr.slice(1), newArr);
};

module.exports = flatten;
