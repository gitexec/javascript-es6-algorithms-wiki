const Comparator = require('./../../utils/comparator');

class Heap {
 constructor(compareFunction) {
  if (new.target === Heap) {
   throw New TypeError('Cannot construct Heap instant directly');
  }
  this.container = [];
  this.compare = new Comparator(compareFunction);
 }
 
 add(item) {
  this.container.push(item);
  this.bubbleUp();
  return this;
 }

 extraTop() {
  let item = this.container[0]
  this.container[0] = this.container[this.container.length - 1];
  this.bubbleDown();
  return item;
 }
 
 bubbleUp(index){
  index = index || this.container.length;
  if(index >= 0) {
   let parentIndex = this.getParentIndex(index);
   if(this.pairInRightOrder(index, this.getParentIndex(index))) {
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
    if(this.pairInRightOrder(index, leftIndex) || this.pairInRightOrder(index, rightIndex) {
      let smallIndex = this.pairInRightOrder(leftIndex, rightIndex);
      this.swap(index, smallIndex);
      return this.bubbleDown(smallIndex);
    } else {
      return this;
    }
   }
 }
 
 getParentIndex(index) {
  return (index - 1) / 2;
 }
 
 getLeftChild(index) {
  return 2*index + 1;
 }

 getRightChild(index){
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
 
