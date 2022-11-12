const BinarySearchTree = require('../../data-structures/binary-search-tree/binary-search-tree');
const Queue = require('../../data-structures/queues/queue');

class BreadthFirstSearch {
  /**
   * Creates a Tree Traversal object
   * @param { BinarySearchTree } tree
   */
  constructor(tree) {
    this.tree = tree;
    this.queue = new Queue();
    this.visited = [];
  }

  search(iteratively = false) {
    if (!this.tree.root) return undefined;
    this.queue.enqueue(this.tree.root);

    if (iteratively) return this.readNodeIteratively();
    return this.readNodeRecursively();
  }

  readNodeRecursively() {
    if (this.queue.length === 0) return this.visited;

    const node = this.queue.dequeue();
    this.visited.push(node.val);

    if (node.left) this.queue.enqueue(node.left);
    if (node.right) this.queue.enqueue(node.right);

    return this.readNode();
  }

  readNodeIteratively() {
    while (this.queue.length > 0) {
      const node = this.queue.dequeue();
      this.visited.push(node.val);

      if (node.left) this.queue.enqueue(node.left);
      if (node.right) this.queue.enqueue(node.right);
    }
    return this.visited;
  }
}

module.exports = BreadthFirstSearch;