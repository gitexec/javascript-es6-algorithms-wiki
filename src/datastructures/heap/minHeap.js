const Heap = require('./heap');

class MinHeap extends Heap{
  pairInRightOrder(item1, item2) {
    return this.compare.lessThanEqual(item1, item2);
  } 
}

module.exports = MinHeap; // study again

