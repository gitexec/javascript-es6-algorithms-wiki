const Node = require('./node');


class LinkedList { 
  constructor() {
   this.head = null;
  }
 
 add(data) { 
  return this.addFirst(data);
 }
 
 addFirst(data) { 
  if(!data) return -1;
  let newNode = new Node(data, this.head);
  this.head = newNode;
  return this;
 }

 addLast(data) {
  if(!data) return -1;
  if(!this.head) {
   this.head = new Node(data, null);
   return this;
  }
  
  let tmpNode = this.head;
  while(tmpNode.next) {
   tmpNode = tmpNode.next;
  }
  
  tmpNode.next = new Node(data, null);
  return this;
 }

 remove(data) {
  if(!data) return -1;
  if(!this.head) return -1;
  if(this.head && this.head.data === data) {
    this.head = this.head.next;
    return this;
  }

  let prev = this.head;

  while(prev.next) {
   if(prev.next.data === data) {
     prev.next = prev.next.next;
     return this;
   }

   prev = prev.next;
  }
  return -1;
 }
 
 getLast() {
  if(!this.head) return -1;
  let tmp = this.head;
  while(tmp.next) tmp = tmp.next;
  return tmp;
 }

 print() {
  let tmp = this.head;
  while(tmp) {
   console.log(tmp.data);
   tmp = tmp.next;
   }
 }
}
module.exports = LinkedList
