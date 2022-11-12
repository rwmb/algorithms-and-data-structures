class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // approach with loop
  insert(val) {
    const node = new Node(val);

    if (!this.root) {
      this.root = node;
      return node;
    }

    let currentNode = this.root;
    
    do {
      const bigger = val > currentNode.val;
      const side = bigger ? 'right' : 'left';

      if (currentNode[side])
        currentNode = currentNode[side];
      else {
        currentNode[side] = node;
        return node;
      }
    } while(currentNode)
  }

  // approach with recursion
  search(val, node = this.root) {
    if (!node) return false;
    if (node.val === val) return node;
    const side = val > node.val ? 'right' : 'left';
    return this.search(val, node[side]);
  }
}

module.exports = BinarySearchTree;
