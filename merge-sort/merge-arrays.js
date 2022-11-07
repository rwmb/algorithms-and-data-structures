// REQUIREMENT
// merge two sorted arrays and return the sorted version of it

// STEPS
// in order to merge two sorted arrays, we have to define two pointers
// one pointer goes to the beginning of the first array
// one pointer goes to the beginning of the second array
// we check for each element to see which one is bigger
// we add the smallest element to the array and increment the side it was on
// we do this until there is no more elements to add

// after we added all the elements in one side, we just keep looping and adding the rest of them to the array
// that's because all elements remaining will be bigger than the ones that were added until this point
// we can do this by concatenating the rest of the array or just keep adding elements


function mergeArrays(left, right) {
  // define pointers
  let pointerLeft = 0, pointerRight = 0;
  const result = [];

  // loop to get all entries from at least one side, both in order
  while(pointerLeft < left.length && pointerRight < right.length) {
    if (left[pointerLeft] <= right[pointerRight]) {
      result.push(left[pointerLeft++]);
    } else {
      result.push(right[pointerRight++]);
    }
  }

  // add remaining entries
  while(pointerLeft < left.length) result.push(left[pointerLeft++]);
  while(pointerRight < right.length) result.push(right[pointerRight++]);

  return result;
}

module.exports = mergeArrays;