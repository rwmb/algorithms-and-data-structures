// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(object) {
  // REQ
  // convert all numbers in the nested object to string
  // return stringified object

  // STEPS
  // for in object
  // if number, transform to string
  // if object, recursive call
  // return object

  const newObj = {};

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (typeof element === 'number')
        newObj[key] = element.toString();
      else if (Array.isArray(element))
        newObj[key] = JSON.parse(JSON.stringify(element));
      else if (typeof element === 'object')
        newObj[key] = stringifyNumbers(element);
      else
        newObj[key] = element;
    }
  }

  return newObj;
}

module.exports = stringifyNumbers;