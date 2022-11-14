const WeightedGraph = require('./dijkstra');

describe('Weighted Graph', () => {
  test('insert', async () => {
    const graph = new WeightedGraph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    graph.addEdge('A', 'B', 9);
    graph.addEdge('A', 'C', 5);
    graph.addEdge('B', 'C', 7);

    expect(graph.adjacencyList['A'].length).toBe(2);
    expect(graph.adjacencyList['B'].length).toBe(2);
    expect(graph.adjacencyList['C'].length).toBe(2);

    expect(graph.adjacencyList['A'][0]).toEqual({node: 'B', weight: 9});
    expect(graph.adjacencyList['A'][1]).toEqual({node: 'C', weight: 5});

    expect(graph.adjacencyList['B'][0]).toEqual({node: 'A', weight: 9});
    expect(graph.adjacencyList['B'][1]).toEqual({node: 'C', weight: 7});

    expect(graph.adjacencyList['C'][0]).toEqual({node: 'A', weight: 5});
    expect(graph.adjacencyList['C'][1]).toEqual({node: 'B', weight: 7});
  });

  test('Dijkstra find', async () => {
    const graph = new WeightedGraph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 4);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('B', 'E', 3);
    graph.addEdge('C', 'D', 2);
    graph.addEdge('C', 'F', 4);
    graph.addEdge('D', 'E', 3);
    graph.addEdge('D', 'F', 1);
    graph.addEdge('E', 'F', 1);

    const result = graph.findBestPath('A', 'E');
    expect(result).toEqual(['A', 'C', 'D', 'F', 'E']);
  });
});
