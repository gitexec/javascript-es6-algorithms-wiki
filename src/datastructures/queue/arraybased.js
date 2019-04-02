class ArrayBasedQueue {
  constructor() {
   this.array = [];
  }
  
 insert(data) {
  this.array[this.array.length] = data;
  return this;
 }

 remove() {
   let returnVal = this.array[0];
   
   for(let i = 1; i < this.array.length; i++) {
    this.array[i - 1] = this.array[i];
   }
   this.array.length--;
   return returnVal;
 }
}

module.exports = ArrayBasedQueue;
