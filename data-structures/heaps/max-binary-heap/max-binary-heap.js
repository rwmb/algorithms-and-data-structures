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
  // and bubble up to the correct spot using the formula to find the parent
  insert(val) {
    this.values.push(val);
    return this.bubbleUp();
  }

  // The way to remove the top value is to replace it with the
  // last entry of the array/heap, and bubble down replacing the
  // biggest values until it sets on the correct place
  remove() {
    if (this.values.length === 0) return null;

    this.values.swap(this.values.length - 1, 0);
    const value = this.values.pop();

    if (this.values.length > 1)
      this.bubbleDown();

    return value;
  }

  bubbleUp(index = this.values.length - 1) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (index === 0 || this.values[index] <= this.values[parentIndex]) return index;

    this.values.swap(index, parentIndex);
    return this.bubbleUp(parentIndex);
  }

  bubbleDown(index = 0) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;

    const leftChild = leftChildIndex < this.values.length
      ? this.values[leftChildIndex] : Infinity;
    const rightChild = rightChildIndex < this.values.length
      ? this.values[rightChildIndex] : Infinity;

    const correctPlace = this.values[index] > leftChild && this.values[index] > rightChild;
    if (correctPlace) return;

    let biggestChildIndex = leftChild > rightChild ? leftChildIndex : rightChildIndex;
    this.values.swap(index, biggestChildIndex);

    return this.bubbleDown(biggestChildIndex);
  }
}

module.exports = MaxBinaryHeap;
