class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.last = null;
    this.first = null;
    this.length = 0;
  }

  enqueue(val) {
    // adds to the end of the list
    const node = new Node(val);

    if (this.length === 0)
      this.first = node;
    else
      this.last.next = node;

    this.last = node;
    this.length++;

    return node;
  }

  dequeue() {
    // removes from the beginning of the list
    if (this.length === 0) return undefined;

    const removed = this.first;
    this.length--;

    if (this.length === 0) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      removed.next = null;
    }

    return removed;
  }
}

module.exports = Queue;
