// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(object) {
  // REQ
  // get an object with nested props and return an array with all strings inside it

  // STEPS
  // create array
  // for in object
  // if nested obj, add to existing array the recursive result of nested obj
  // if string, push to the created array
  // return array

  const result = [];
  
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (typeof element === 'string')
        result.push(element);
      if (typeof element === 'object')
        result.push(...collectStrings(element));
    }
  }

  return result;
}

module.exports = collectStrings;