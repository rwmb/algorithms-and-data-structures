class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length)
      return null;

    let pos, coeficient, element, counter;

    if (index >= Math.floor((this.length) / 2)) {
      pos = 'prev';
      coeficient = -1;
      element = this.tail;
      counter = this.length - 1;
    } else {
      coeficient = 1;
      pos = 'next';
      element = this.head;
      counter = 0;
    }

    while(counter !== index) {
      element = element[pos];
      counter += (1 * coeficient);
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

    const node = new Node(value);

    const current = this.get(index);
    const prev = current.prev;
    node.next = current;
    node.prev = prev;
    current.prev = node;

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

    const temp = this.tail;

    let secondToLast = this.tail.prev;
    this.tail = secondToLast;
    temp.prev = null;
    this.tail.next = null;

    return temp;
  }

  push(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
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
    
    const current = this.get(index);

    current.prev.next = current.next;
    current.next.prev = current.prev;

    this.length--;

    return current;
  }

  reverse() {
    if (this.length < 2) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    for (let i = 0; i < this.length; i++) {
      const temp = node.next;
      node.next = node.prev;
      node.prev = temp;
      node = temp;
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
    this.head.prev = null;
    temp.next = null;

    return temp;
  }

  unshift(val) {
    const node = new Node(val);

    if (this.length === 0)
      this.tail = node;
    else {
      this.head.prev = node;
      node.next = this.head;
    }

    this.head = node;
    this.length++;

    return node;
  }
}

module.exports = {Node, DoublyLinkedList};