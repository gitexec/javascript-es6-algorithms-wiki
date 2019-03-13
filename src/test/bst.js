const BST = require('./../algorithms-kit/trees/bst');
const assert = require('assert');

describe('BST trees tests', () => {
  let bst;
   /**
        15
      /     \
     9      23
    / \    /  \
   3   12  17 28
  / \
     8 
  */
  beforeEach(() => {
    bst = new BST(15);
    bst.insert(9);
    bst.insert(23);
    bst.insert(3);
    bst.insert(12);
    bst.insert(17);
    bst.insert(28);
    bst.insert(8);
  });
  describe('#insert() BST', () => {
   it('should insert nodes', () => {
    assert.strictEqual(bst.insert(1).data, 3);// parent should be 3
   });
  })
  
  describe('#find()', () => {
   it('should find an existing value', () => {
     assert.strictEqual(bst.find(12).data, 12);
   });
  });
 
  describe('#remove()', () => {
   it('should remove any value and keep props', () => {
    assert.strictEqual(bst.remove(3).data, 8); // right child only
    bst.remove(8);
    bst.insert(3);
    bst.insert(8);
    assert.strictEqual(bst.remove(9).data, 8); // two children
    bst.insert(9);
    assert.strictEqual(bst.remove(12).data, 9); // child in left node only
   });
  });

});
