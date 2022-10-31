require('../array/prototype');

Array.prototype.insertionSort = function () {
  // STEPS
  // loop through all array, starting at second position
  // remove the element from the array and compare to each element before it
  // once it finds a bigger element, place it after that element

  for (let i = 1; i < this.length; i++) {
    const element = this.splice(i, 1)[0];
    for (let j = i - 1; j >= 0; j--) {
      if (element > this[j]) {
        this.splice(j + 1, 0, element);
        break;
      } else if (j === 0)
        this.unshift(element);
    }
  }

  return this;
};
