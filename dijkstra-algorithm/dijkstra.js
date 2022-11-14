/**
 * A simple Priority Queue with bad performance
 */
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

/**
 * A class to find a good path for a weighted graph
 */
class DijkstraFinder {
  constructor(adjacencyList) {
    if (!adjacencyList)
      throw Error('We need a list here!');

    if (adjacencyList.length < 2)
      throw Error('Length is too short!');

    this.adjacencyList = adjacencyList;
    this.distances;
    this.bestPrevious;
    this.queue;
    this.start = null;
    this.end = null;
  }

  getBestPath(start, end) {
    this.start = start;
    this.end = end;
    this.setupAlgorithm();
    const result = [];

    // Loop while there are elements in the queue
    let node;
    do {
      // Get smallest node
      node = this.queue.dequeue().val;
  
      // If it's the end point we return because we found the smallest route already
      if (node === this.end) {
        while(node) {
          result.push(node);
          
          if (node === this.start) break;
          node = this.bestPrevious[node];
        }
        return result.reverse();
      };
      // If not, we continue execution to find smallest paths

      let currentDistance;
      // Loop through all elements siblings of that node to find their distances through this path
      for (const element of this.adjacencyList[node]) {
        // Get the current distance from the node we are looking at
        currentDistance = this.distances[node] + element.weight;
        // If the distance is shorter than current distance, update properties to best path
        if (currentDistance < this.distances[element.node]) {
          this.distances[element.node] = currentDistance;
          this.bestPrevious[element.node] = node;
          this.queue.enqueue(element.node, currentDistance);
        }
      }
    } while (this.queue.values.length > 0)

    throw Error('No path to end');
  }

  setupAlgorithm() {
    this.distances = {};
    this.bestPrevious = {};
    this.queue = new PriorityQueue();

    for (const entry in this.adjacencyList) {
      if(entry === this.start) {
        this.distances[this.start] = 0;
        this.queue.enqueue(this.start, 0);
      } else {
        this.distances[entry] = Infinity;
        this.queue.enqueue(entry, Infinity);
      }
      this.bestPrevious[entry] = null;
    }

    return this.distances;
  }
}

/**
 * A Weighted Graph used to determine paths with some weight
 */
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }

  findBestPath(start, end) {
    const finder = new DijkstraFinder(this.adjacencyList);

    return finder.getBestPath(start, end);
  }
}

module.exports = WeightedGraph;
