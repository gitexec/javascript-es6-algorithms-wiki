const PriorityQueue = require('../datastructures/priority-queue/priorityqueue');

function dijkstra(graph, source, destination) {
  let q = new PriorityQueue();
  
  let nodeCost = {[source.data]: 0};
  for(let n of graph.getVertices()) {
    nodeCost[n]: Infinity;
  }
  q.add({graph.getVertex(source), 0});
   
  while(q.isEmpty()) {
   let currNode = q.extraMin();
   
   if(currNode.data === destination.data) {
    // search found
    return currNode;
   }
   for(let n in graph.getNeigbors(currNode.data)) {
     let nNode = graph.getVertex(n);
     let travelWeight = nodeCost[currNode.data] + currNode.edges.weight;
     if(nodeCost[n] > travelWeight) {
       nodeCost[n] = travelWeight;
     }
     q.add({nNode, nodeCost[n]});
   }
  }
}

module.exports = dijkstra;
