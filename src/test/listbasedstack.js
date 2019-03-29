const List = require('./../datastructures/stack/listbased.js');
const assert = require('assert');


describe('List Based Stack', () => {
  
  let stack;
  beforeEach(() => {
   stack = new List();
  });

  describe('#push()', () => {
    it('should push to the head', () => {
      stack.push(6).push(5).push(4).push(8);
      assert.strictEqual(stack.peek().data, 8);
 
    });
 
  });
  
  describe('#pop()', () => {
   it('should remove from the list', () => {
    stack.push(4).push(9).push(5);
    assert.strictEqual(stack.pop().data, 5);
   });

  });
});
