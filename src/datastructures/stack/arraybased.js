class ArrayBasedStack {
  constructor() {
   this.array = [];
  }
  
  push(data) {
   this.array[this.array.length] = data;
   return this;
  }

  pop() {
   if ( this.array.length === 0) return null;
   let value = this.array[this.array.length - 1];
   this.array.length--;
   return value;
  }

  peek() {
   if (this.array.lenght === 0) return null;
   return this.array[this.array.length - 1];
  }
}

module.exports = ArrayBasedStack;
