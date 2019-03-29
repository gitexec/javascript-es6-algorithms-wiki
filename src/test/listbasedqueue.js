const Queue = require('./../datastructures/queue/listbased');
const assert = require('assert');

describe('Queue List Based', () => {
  let q;
  
  beforeEach(() => {
   q = new Queue();
  });

  describe('#insert()', () => {
   it('should insert at the end', () => {
     q.insert(5).insert(99).insert(10).insert(11);
     assert.strictEqual(q.head.data, 11);
   });
  });

  describe('#remove()', () => {
   it('should remove a value', () => {
    q.insert(11).insert(99).insert(10).insert(55);
    assert.strictEqual(q.remove().data, 11);
   });
  });
});
