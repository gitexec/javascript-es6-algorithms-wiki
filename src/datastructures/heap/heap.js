class Heap {
 constructor() {
  if (new.target === Heap) {
   throw New TypeError('Cannot construct Heap instant directly');
  }
  this.container = [];
 }
 
 add(item) {
  this.container.push(item);
  this.bubbleUp(this.container.length -1);
  return this;
 }

 extraMin(index) {
  let item = this.container[index]
  
 }
}

module.exports = Heap;
 
