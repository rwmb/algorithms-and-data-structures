const binarySearchTree = require('./binary-search-tree');

describe('Binary Search Tree', () => {
  test('insert', async () => {
    const bst = new binarySearchTree();

    expect(bst.root).toBe(null);

    bst.insert(20);

    expect(bst.root.val).toBe(20);
    expect(bst.root.left).toBe(null);
    expect(bst.root.right).toBe(null);

    bst.insert(15);
    bst.insert(17);
    bst.insert(24);
    bst.insert(22);

    expect(bst.root.left.val).toBe(15);
    expect(bst.root.left.right.val).toBe(17);
    expect(bst.root.right.val).toBe(24);
    expect(bst.root.right.left.val).toBe(22);
  });

  test('search', async () => {
    const bst = new binarySearchTree();

    bst.insert(20);
    bst.insert(15);
    bst.insert(17);
    bst.insert(24);
    bst.insert(22);

    expect(bst.search(20).val).toBe(20);
    expect(bst.search(10)).toBe(false);
    expect(bst.search(18)).toBe(false);
    expect(bst.search(22).val).toBe(22);
    expect(bst.search(24).val).toBe(24);
  });
});
