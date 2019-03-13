const Node = require('./node');

class ListBasedQueue {
  constructor() {
   this.head = null;
  }

  insert(data) {
   let tmp = new Node(data, this.head);
   this.head = tmp;
   return this;
  }
  
  remove() {
    if(!this.head) return null;
    
    let tmp = this.head;
    while(tmp.next) {
      tmp = tmp.next;
    }
    
    let rtVal = tmp;
    tmp = null;
    return rtVal;
 }
}
module.exports = ListBasedQueue;
    
