class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length)
      return null;

    let element = this.head;
    for (let i = 0; i < index; i++) {
      element = element.next;
    }

    return element;
  }

  insert(index, value) {
    if (index < 0 || index > this.length)
      return false;

    if (index === 0)
      return this.unshift(value);
    if (index === this.length)
      return this.push(value);

    const prev = this.get(index - 1);
    const next = prev.next;
    const node = new Node(value);
    prev.next = node;
    node.next = next;
    this.length++;

    return node;
  }

  pop() {
    if (!this.head) return undefined;

    this.length--;

    if (this.head === this.tail) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      return temp;
    }

    let secondToLast = this.head;

    while(secondToLast.next.next !== null)
      secondToLast = secondToLast.next;

    const temp = secondToLast.next;
    this.tail = secondToLast;
    this.tail.next = null;

    return temp;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;

    return node;
  }

  remove(index) {
    if (index < 0 || index >= this.length)
      return undefined;

    if (index === 0)
      return this.shift();
    if (index === this.length - 1)
      return this.pop();
    
    const prev = this.get(index - 1);
    const current = prev.next;
    const next = current.next;

    prev.next = next;
    this.length--;

    return current;
  }

  reverse() {
    if (this.length < 2) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  set(index, value) {
    const element = this.get(index);

    if (!element)
      return false;

    element.val = value;

    return true;
  }

  shift() {
    if (this.length < 1) return undefined;

    const temp = this.head;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return temp;
    }

    if (this.length === 1) this.tail = this.head.next;

    this.head = this.head.next;

    return temp;
  }

  unshift(val) {
    const node = new Node(val);

    if (this.length === 0)
      this.tail = node;
    else
      node.next = this.head;

    this.head = node;
    this.length++;

    return node;
  }
}

module.exports = {Node, SinglyLinkedList};