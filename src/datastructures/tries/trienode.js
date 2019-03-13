class TrieNode {
 constructor(key, parent = null) {
  this.key = key;
  this.parent = parent;
  this.children = {};
  this.end = false;
 }
 getWord() {
  let tmp = this;
  let output = [];

  while(tmp) {
   output.unshift(tmp.key);
   tmp = tmp.parent;
  }
  return tmp.join();
 }
}

module.exports = TrieNode;

