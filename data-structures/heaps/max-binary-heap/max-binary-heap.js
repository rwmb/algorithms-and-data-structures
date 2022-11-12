Array.prototype.swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

// Heaps are represented by an array, even though they can be classified
// as a Tree, although they do not need a special structure to be built
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // The way to insert a new value is to put it at the end of the list
  insert(val) {
    this.values.push(val);
    return this.bubbleUp();
  }

  // and bubble up to the correct spot using the formula to find the parent
  bubbleUp(index = this.values.length - 1) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (index === 0 || this.values[index] <= this.values[parentIndex]) return index;

    this.values.swap(index, parentIndex);
    return this.bubbleUp(parentIndex);
  }
}

module.exports = MaxBinaryHeap;
