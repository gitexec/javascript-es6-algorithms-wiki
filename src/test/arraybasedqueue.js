const Queue = require('./../datastructures/queue/arraybased');
const assert = require('assert');

describe('Queue Array Based', () => {
 
  let q;
  beforeEach(() => {
   q = new Queue();
  });

  describe('#insert()', () => {
   it('should insert at the end', () => {
    q.insert(9).insert(8).insert(4).insert(7);
    assert.strictEqual(q.array.length, 4);
    assert.strictEqual(q.array[0], 9);
   });
  });

  describe('#remove()', () => {
   it('should remove the FIFO value', () => {
    q.insert(5).insert(10).insert(20).insert(76);
    assert.strictEqual(q.remove(), 5);
   });
  });
});
