// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(objectToSum) {
  // add whatever parameters you deem necessary - good luck!

  // REQUIREMENTS
  // sum all even numbers in a nested object

  // STEPS
  // return sum at the end *
  // run through all entries of the object
  // if it is a number and even, add to sum
  // else, get the sum for that object
  // return the sum of that *

  let sum = 0;

  for (const key in objectToSum) {
    if (Object.hasOwnProperty.call(objectToSum, key)) {
      const entry = objectToSum[key];
      if (typeof entry === 'object') sum += nestedEvenSum(entry);
      else if (typeof entry === 'number' && entry % 2 === 0) sum += entry;
    }
  }

  return sum;
}

module.exports = nestedEvenSum;
