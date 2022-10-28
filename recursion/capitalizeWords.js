// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords (entry, resultObject) {
  // add whatever parameters you deem necessary - good luck!

  // REQUIREMENTS
  // get an array with words, go through each word and return capitalized version
  // using only recursion
  
  // STEPS
  // base case is entry length === 0
  // if entry is array, capitalizeWords of object, adding them to final array
  // if entry is string, capitalizeWords of characters, adding them to final string

  let result = typeof entry === 'string' ? resultObject || '' : resultObject || [];

  if (entry.length === 0) return result;

  if (typeof entry === 'string') {
    result += entry[0].toUpperCase();
    return capitalizeWords(entry.slice(1), result);
  }

  result.push(capitalizeWords(entry.shift()));
  return capitalizeWords(entry, result);
}

module.exports = capitalizeWords;

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']