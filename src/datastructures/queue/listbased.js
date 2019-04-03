const LinkedList = require('./../listlist/linkedlist');

class ListBasedQueue {
  constructor() {
   this.list = new LinkedList();
  }

  insert(data) {
   this.list.addLast(data);
   return this;
  }
  
  peek() {
   return this.list.getFirst();
  }
  
  remove() {
   let first = this.list.removeFirst();
   return (first === null) ? null : first.data;
 }
}
module.exports = ListBasedQueue;
    
