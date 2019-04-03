class GraphNode {
  constructor(data) {
   this.data = data;
   this.edges = {};
   this.visited = false;
  }
}
module.exports = GraphNode;
