const Stack = require('./../datastructures/stack/arraybased');
const assert = require('assert');

describe('testing array based stack', () => {
  let testStack;
 
  beforeEach(() => {
   testStack = new Stack();
  })

  describe('#push()', () => {
   it('should push to the stack', () => {
     testStack.push(1).push(4).push(89);
     assert.strictEqual(testStack.peek(), 89);
     assert.strictEqual(testStack.array.length, 3);
   });
  });
 
  describe('#pop()', () => {
     it('should remove/pop most recent val', () => {
       testStack.push(2).push(3).push(89).push(77);
       assert.strictEqual(testStack.pop(), 77);
     });
  });
});
