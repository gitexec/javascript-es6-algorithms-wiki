class BST {
 constructor(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
 }

 insert(data) {
   if (data < this.data) {
    if(this.left) {
     return this.left.insert(data);
    } else {
     this.left = new BST(data);
     return this;
    }
   } else {
    if(this.right) {
      return this.right.insert(data);
    } else {
     this.right = new BST(data);
     return this;
    }
   }
 }

 find(data) {
   if (data === this.data) return this;
   if (data < this.data) {
    if(this.left) return this.left.find(data);
    return null;
   }
   else if (data > this.data) {
    if(this.right) return this.right.find(data);
    return null;
   }
   else {
     return null;
   }
 }

 remove(data) {
  if (data === this.data) {
   //3 cases
   if (this.left && !this.right) {
    this.data = this.left.data;
    this.left = data;
    return this;   
   } 
   else if (this.right && !this.left) {
    this.data = this.right.data;
    this.right = null;
    return this;
   }
   else { //both
    let max = this.left.max();
    this.data = max.data;
    max = null;
    return this; 
   }
  }
  else if ( data < this.data ) {
    return this.left.remove(data);
  }
  else if ( data > this.data ) {
   return this.right.remove(data);
  } else {
    return null;
  }
 }

 max() {
  if(!this.right) return this;
  return this.right.max();
 }
}

module.exports = BST;
