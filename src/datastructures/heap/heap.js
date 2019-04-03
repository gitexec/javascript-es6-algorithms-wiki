const Comparator = require('./../../utils/comparator');

class Heap {
 constructor(compareFunction) { 
  if (new.target === Heap) {
   //throw New TypeError('Cannot construct Heap instant directly');
  }
  this.container = [];
  this.compare = new Comparator(compareFunction);
 }
 
 add(item) {
  this.container.push(item);
  this.bubbleUp(this.container.length - 1);
  return this;
 }

 remove() {
  let item = this.container[0]
  this.container[0] = this.container.pop();
  this.bubbleDown();
  return item;
 }
 
 peek() {
  return this.container[0];
 }
 
 bubbleUp(index){
  if(index > 0) {
   let parentIndex = this.getParentIndex(index);

   if(parentIndex >= 0 && !this.pairInRightOrder(this.container[parentIndex], this.container[index])) {
    this.swap(index, parentIndex);
    return this.bubbleUp(parentIndex);
   } else {
     return this;
   }
  }
 }
 
 bubbleDown(index = 0) {
   if(index < this.container.length) {
    let leftIndex = this.getLeftChildIndex(index);
    let rightIndex = this.getRightChildIndex(index);
    let parent = this.container[index];
    let lChild = this.container[leftIndex];
    let rChild = this.container[rightIndex];
    if(rChild !== undefined && !(this.pairInRightOrder(parent, lChild) || this.pairInRightOrder(parent, rChild))) {
      let swapIndex = this.pairInRightOrder(lChild, rChild) ? leftIndex : rightIndex;
      this.swap(index, swapIndex);
      return this.bubbleDown(swapIndex);
    } else if (lChild !== undefined && !this.pairInRightOrder(parent, lChild)){
       this.swap(index, leftIndex);
       return this.bubbleDown(leftIndex);
    } else return this;
   }
 }
 
 getParentIndex(index) {
  return Math.floor(Math.abs(index - 1) / 2);
 }
 
 getLeftChildIndex(index) {
  return 2*index + 1;
 }

 getRightChildIndex(index){
  return 2*index + 2;
 }

 // Needs to be overriden in the subclass
 pairInRightOrder(item1, item2) {}

 swap(i, j) {
  let tmp = this.container[i];
  this.container[i] = this.container[j];
  this.container[j] = tmp;
 }
 
 isEmpty() {
  return this.container.length === 0;
 }
}

module.exports = Heap;
 
