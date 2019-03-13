
// How to optimized space? have class node { constructor(data) { this.data = data; this.edges = {}; this.visited = false; }
function DFS(graph, nodeName) {
  let currNode = graph.getVertex(nodeName);
  
  for(let child in graph.getNeighbors(currNode.data)) {
   if(!child.visited) {
    DFS(graph, child.data);
   } else {
    // do something
   }
  }
}
