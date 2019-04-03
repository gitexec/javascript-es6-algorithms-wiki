
// How to optimized space? have class node { constructor(data) { this.data = data; this.edges = {}; this.visited = false; }
function DFS(graph, nodeName) {
  
  let currNode = graph.getVertex(nodeName);
  currNode.visited = true;
  
  for(let child in graph.getNeighbors(currNode.data)) {
   let childNode = graph.getVertex(nodeName);
   if(!childNode.visited) {
    DFS(graph, childNode.data);
   } else {
    // do something
   }
  }
}
