const bfs = require('./bfs');
const BinarySearchTree = require('../../data-structures/binary-search-tree/binary-search-tree');

describe('BreadthFirstSearch', () => {
  test('search', async () => {
    const tree = new BinarySearchTree();
    const traversal = new bfs(tree);

    tree.insert(50);
    tree.insert(25);
    tree.insert(40);
    tree.insert(65);
    tree.insert(85);
    tree.insert(12);
    tree.insert(6);
    tree.insert(14);

    const expectedResult = [50, 25, 65, 12, 40, 85, 6, 14];

    expect(traversal.search(true)).toEqual(expectedResult);
    expect(traversal.search(false)).toEqual(expectedResult);
  });
});
