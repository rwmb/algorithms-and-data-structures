Array.prototype.swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueueMin {
  constructor() {
    this.values = [];
  }

  // The way to insert a new value is to put it at the end of the list
  // and bubble up to the correct spot using the formula to find the parent
  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    return this.bubbleUp();
  }

  // The way to remove the top value is to replace it with the
  // last entry of the array/heap, and bubble down replacing the
  // smallest values until it sets on the correct place
  dequeue() {
    if (this.values.length === 0) return null;

    this.values.swap(this.values.length - 1, 0);
    const value = this.values.pop();

    if (this.values.length > 1)
      this.bubbleDown();

    return value;
  }

  bubbleUp(index = this.values.length - 1) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (index === 0 || this.values[index].priority >= this.values[parentIndex].priority)
      return index;

    this.values.swap(index, parentIndex);
    return this.bubbleUp(parentIndex);
  }

  bubbleDown(index = 0) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;

    const leftChildPriority = this.values[leftChildIndex]?.priority || Infinity;
    const rightChildPriority = this.values[rightChildIndex]?.priority || Infinity;

    const correctPlace = this.values[index].priority < leftChildPriority
      && this.values[index].priority < rightChildPriority;

    if (correctPlace) return;

    let smallestChildIndex = leftChildPriority < rightChildPriority ? leftChildIndex : rightChildIndex;
    this.values.swap(index, smallestChildIndex);

    return this.bubbleDown(smallestChildIndex);
  }
}

module.exports = PriorityQueueMin;
