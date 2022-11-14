const Graph = require('./graph');

describe('Graph', () => {
  test('traverse', async () => {
    const g = new Graph();

    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addVertex('D');
    g.addVertex('E');
    g.addVertex('F');

    g.addEdge('A', 'B');
    g.addEdge('A', 'C');
    g.addEdge('B', 'D');
    g.addEdge('C', 'E');
    g.addEdge('D', 'E');
    g.addEdge('D', 'F');
    g.addEdge('E', 'F');

    const resultRecursively = g.dfs();
    let result = [];
    for (const key in resultRecursively)
      result.push(key);

    expect(result).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);

    const resultIterativelyDFS = g.dfsIteratively();
    result = [];
    for (const key in resultIterativelyDFS)
      result.push(key);

    expect(result).toEqual(['A', 'C', 'E', 'F', 'D', 'B']);

    const resultIterativelyBFS = g.bfs();
    result = [];
    for (const key in resultIterativelyBFS)
      result.push(key);

    expect(result).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});
