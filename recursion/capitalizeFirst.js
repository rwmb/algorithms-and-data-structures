function capitalizeFirst (arr, entry = 0) {
  // add whatever parameters you deem necessary - good luck!
  
  // base case is entry bigger than array length
  
  // access the entry in the array
  // uppercase first letter and concat with splice 1

  if (entry === arr.length) return arr;

  const currentString = arr[entry];
  arr[entry] = currentString[0].toUpperCase() + currentString.slice(1);

  return capitalizeFirst(arr, entry + 1);
}

module.exports = capitalizeFirst;
