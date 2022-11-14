# Dijkstra's Algorithm

## What is the Dijkstra's Algorithm?
It's a famous and widely used algorithm that works on weighted graphs.

## How does it work?
It finds the closest path between two vertices on a weighted graph.
What's the fastest way from point A to point B with a million points in between?

## Who was Dijkstra?
Edsger Dijkstra was a Dutch programmer, physicist, essayist and all around smarty-pants. He was responsible for many famous algorithms and concepts on Computer Science.

## What is this algorithm useful for?
- GPS (finding the fastest route)
- Network Routing (finding the shortest open path for data)
- Biology (modeling the spread of viruses among humans)
- Airline Tickets (finding cheapest route to a destination)
- Many other uses...

## How does this algorithm works?
It uses a weighted, directed or undirected graph to calculate the shortest/cheapest/easiest path between two nodes/vertices. The weight can have different meanings. It could be the distance between two nodes, how expensive it is to travel between each node or how slow/difficult it is. The difference from what was studied until this point is that we now need an object to store the connections in the adjacency list, instead of just the connection itself.

### The approach
1. Each time we visit a __new node__, we pick the node with the _smallest_ known distance to visit first.
2. Once we move to the node we are going to visit, we look at each of its neighbors.
3. For each neighboring node, we _calculate the distance_ by assuming the __total__ edges that lead to the node we're checking from the *__starting node__*
4. If the new total distance to a node is *less* than the previous total, we store the new shorter distance for that node with the previous path.
