const Stack = require('../stacks/stack');
const Queue = require('../queues/queue');

class Graph {
  constructor () {
    // the list containing the connections between nodes
    this.adjacencyList = {};
    this.visited = {};
  }

  // Add a vertex
  addVertex(vertex) {
    // check if vertex exists
    if(!this.adjacencyList[vertex])
      // add vertex to list
      this.adjacencyList[vertex] = [];
  }

  // Add an edge
  addEdge(vertex1, vertex2) {
    // assign vertices connections
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Remove an edge
  removeEdge(vertex1, vertex2) {
    // find index of vertex in list
    const l1 = this.adjacencyList[vertex1];
    const l2 = this.adjacencyList[vertex2];
    l1.splice(l1.indexOf(vertex2), 1);
    l2.splice(l2.indexOf(vertex1), 1);
  }

  bfs(node) {
    const nodeToVisit = node || Object.keys(this.adjacencyList)[0];
    this.visited = {};
    
    const queue = new Queue();
    queue.enqueue(nodeToVisit);
    let vertex;

    while(queue.length > 0) {
      vertex = queue.dequeue().val;
      this.visited[vertex] = true;

      this.adjacencyList[vertex].forEach(sibling => {
        if (!this.visited[sibling]) {
          this.visited[sibling] = true;
          queue.enqueue(sibling);
        }
      });
    }

    return this.visited;
  }

  dfs(node) {
    const nodeToVisit = node || Object.keys(this.adjacencyList)[0];
    this.visited = {};
    this.visitNodeDFSRecursively(nodeToVisit);

    return this.visited;
  }

  visitNodeDFSRecursively(node) {
    // mark node as this.visited
    // get all siblings connected to that node
    // check which ones have not been this.visited
      // visit them

    this.visited[node] = true;

    for (const sibling of this.adjacencyList[node]) {
      if (!this.visited[sibling])
        this.visitNodeDFSRecursively(sibling);
    }
  }

  dfsIteratively(node) {
    const nodeToVisit = node || Object.keys(this.adjacencyList)[0];
    this.visited = {};
    
    const stack = new Stack();
    stack.push(nodeToVisit);

    while(stack.length > 0) {
      const vertex = stack.pop().val;

      this.visited[vertex] = true;
      this.adjacencyList[vertex].forEach(sibling => {
        if (!this.visited[sibling])
          stack.push(sibling);
      });
    }

    return this.visited;
  }
}

module.exports = Graph;
