require('../array/prototype');

Array.prototype.bubbleSort = function () {
  // STEPS
  // start looping with a variable called i from the end to the beggining of the array
  // start an inner loop with a variable called j from the beginning all the way to i - 1
  // if arr[j] is greater than array[j + 1], swap those two values
  // return the sorted array

  for (let i = this.length - 1; i > 0; i--) {
    hasChanged = false;
    for (let j = 0; j < i; j++) {
      if (this[j] > this[j + 1]) {
        this.swap(j, j + 1);
        hasChanged = true;
      }
    }
    if(!hasChanged)
      break;
  }

  return this;
};