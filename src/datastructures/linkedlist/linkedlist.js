const Node = require('./node');

class LinkedList { 
  constructor() {
   this.head = null;
   this.tail = null;
  }
 
 add(data) { 
  return this.addLast(data);
 }
 
 addFirst(data) { 
  if(!data) return null;

  let newNode = new Node(data, this.head);
  this.head = newNode;
  
  if (!this.tail) {
   tail = newNode;
  }

  return this;
 }

 addLast(data) {
  if(!data) return null;

  let newNode = new Node(data, this.tail);
  tail = newNode;
  
  if(!this.head) {
   this.head = newNode;
  }
  return this;
 }
 
 // TODO : Keep track of tail?
 removeFirst() {
  if (!this.head) return null;
  let rtValue = this.head;
  this.head = this.head.next;
  return rtValue;
 }
 
 removeLast() { 
  if(!this.tail) return null;
  let rtValue = this.tail;
  this.tail = this.tail.next;
  return rtValue;
 }

 remove(data) {
  if(!data) return null;
  if(!this.head) return null;
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
  return null;
 }
 
 getLast() {
  if(!this.tail) return null;
  return tail;
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
