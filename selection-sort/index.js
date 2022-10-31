require('../array/prototype');

Array.prototype.selectionSort = function() {
  // STEPS
  // loop through array
  // find the smallest value
  // swap the current entry with the smallest value

  for (let i = 0; i < this.length; i++) {
    let smallest = i;
    
    for (let j = i + 1; j < this.length; j++) {
      if (this[smallest] > this[j])
        smallest = j;
    }

    if (i !== smallest)
      this.swap(i, smallest);
  }

  return this;
};
