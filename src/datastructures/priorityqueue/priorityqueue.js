const Heap = require('./../heap/minHeap');
const Comparator = require('./../../utils/comparator');

class PriorityQueue extends Heap {
  constructor(){
   this.compare = new Comparator(this.comparePriotity.bind(this));
   this.priority = new Map(); 
  }
  
  add(item, priority = 0) {
    this.priority.set(item, priority);
    super.add(item);
  }
 
  remove() {
   let top = this.extraTop();
   this.priority.delete(top);
  }
  
  comparePriority(item1, item2) {
    return this.compare.lessThanEqual(this.priority.get(item1), this.priority.get(item2));
  }
}
