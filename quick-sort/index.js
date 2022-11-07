require('../array/prototype');

// STEPS
// create a index controller
// get the pivot element in the array (first)
// loop through all elements
// if element is smaller than pivot
  // increment index
  // swap element with index
// swap pivot with index

Array.prototype.quickSort = function (start = 0, end = this.length) {
  const index = this.movePivot(start, end);

  if (index === -1)
    return this;

  this.quickSort(start, index);
  this.quickSort(index + 1, end);

  return this;
}

Array.prototype.movePivot = function (start, end) {
  if (end - start < 2) return -1;

  let indexToSwap = start;
  for (let i = start + 1; i < end; i++) {
    if (this[start] > this[i])
      this.swap(++indexToSwap, i);
  }

  this.swap(indexToSwap, start);

  return indexToSwap;
}

