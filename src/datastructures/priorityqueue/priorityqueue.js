const Heap = require('./../heap/minHeap');
const Comparator = require('./../../utils/comparator');

class PriorityQueue extends Heap {
  constructor(){
   super();
   this.compare = new Comparator(this.comparePriority.bind(this));
   this.priority = new Map(); 
  }
  
  add(item, priority) {
    this.priority.set(item, priority);
    super.add(item);
  }
 
  remove() {
   let top = super.remove();
   this.priority.delete(top);
   return top;
  }
  
  comparePriority(item1, item2) {
    if(this.priority.get(item1) === this.priority.get(item2)) {
     return 0;
    } 
    return this.priority.get(item1) < this.priority.get(item2) ? -1: 1;
  }
}

module.exports = PriorityQueue;

// let p = new PriorityQueue();
// p.add('A', 1);
// p.add('c', 2);
// p.add("P", 0);
// p.add('o', 8);
// p.add('i', 9);
// p.add('w', 4);

// console.log(p.remove())
// console.log(p.remove())
// console.log(p.remove())
// console.log(p.remove())
// console.log(p.remove())
// console.log(p.remove())
