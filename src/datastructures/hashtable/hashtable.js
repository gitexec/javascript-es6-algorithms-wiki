const LinkedList = require('./../list/linkedlist');

class HashTable {
  construtor(capacity) {
   this.buckets = Array(typeof capacity === 'number' capacity : 10);
  }
  
  set(key, data) {
   let slot = this.hashFunction(key);
   if(!this.buckets[slot]) {
    this.buckets[slot] = new LinkedList();
   }
    this.buckets[slot].add({key, value});
  }

  get(key) {
   const slot = this.hashFunction(key);
   return this.buckets[slot] ? this.buckets[slot] : null;
  }
  
  // simple hash function implementation. There are more effective implementation. Example SHA-256 Cryptographic Hash Algorithm

  hashFunction(key) {
   let keyInNo = key; 
   if(typeof keyInNo !== 'number') {
    for(let c of keyInNo) {
      keyInNo += c.charAt(0);
    }
   }
   return keyInNo % this.buckets.length;
  }
}

module.exports = HashTable;
