const GraphNode = require('./GraphNode.js');

class Graph {
  constructor() {
   this.vertices = {};
  }

 addVertex(v) {
   if(!this.vertices[v]) {
    this.vertices[v] = new GraphNode(v);
   }
   return this;
 }

 addEdge(v, w) {
   if(!this.vertices[v] && !this.vertices[w] ) {
    if(this.vertices[v].edges[w]){
     this.vertices[v].edges[w].weight += 1;
    } else {
     this.vertices[v].edges[w] = {weight: 1}
    }
  }
 }
 
 removeVertex(v) {
  if(this.vertices[v]) {
   delete this.vertices[v];
   //remove reference to this vertex;
   for(let c in this.vertices ) { 
     if(this.vertices[c].edges[v]) {
      delete this.vertices[c].edges[v];
     }
   }
  }
 }

 getVertex(v) {
  if(this.vertices[v]) {
   return this.vertices[v];
  }
 } 
 
 removeEdge(v, w) {
  if(this.vertices[v] && this.vertices[w]) {
   delete this.vertices[v].egdes[w];
  }
 }

 neighbors(v) {
  if(this.vertices[v]) {
   return this.vertices[v].edges;
  }
} 
