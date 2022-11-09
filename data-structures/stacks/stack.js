class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  pop() {
    if (this.length < 1) return undefined;

    const temp = this.first;
    this.length--;

    if (this.length === 0) {
      this.first = null;
      this.last = null;
      return temp;
    }

    if (this.length === 1) this.last = this.first.next;

    this.first = this.first.next;

    return temp;
  }

  push(val) {
    const node = new Node(val);

    if (this.length === 0)
      this.last = node;
    else
      node.next = this.first;

    this.first = node;
    this.length++;

    return node;
  }
}

module.exports = Stack;