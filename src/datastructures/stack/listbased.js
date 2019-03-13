const Node = require('./node');

class StackListBased {
  constructor() {
   this.head = null;
  }

  push(data) {
    this.head = new Node(data, this.head);
    return this;
  }
  
  pop() {
   if (!this.head) return null;
   let value = this.head;
   this.head = this.head.next;
   return value;
 }
 
 peek() {
   return this.head;
 }

}

module.exports = StackListBased;

