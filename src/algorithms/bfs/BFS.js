//const Graph = require('./datastructures/graph/Graph');
//const GraphNode;
const Queue = require('./datastructures/queue/listBased');

//T: O(V+E), Space: O(V)  
function BSF(graph, nodeName) {
   let source = graph.getVertex(nodeName);
   let visited = [];   
   let q = new Queue();
   q.add(source);
  
   while(!q.isEmpty) {
    let currNode = q.remove();
    if(!visited.includes(currNode.getValue())) {
     process(currNode);
     visited.push(currNode.getValue());
     for(let childName in graph.getNeighbors(currNode.getValue())) {
      q.add(graph.getVertex(childName)); 
     }  
    } else {
      //have seen it do something about it :)
    }
   }
}

function process(node) {
 console.log(node);
}
module.exports = BFS;

