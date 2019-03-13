const assert = require('assert');
const List = require('./../algorithms-kit/linkedlist/linkedlist');

describe('LinkedList Test', () => {
 let linkedList;
 beforeEach(() => {
  linkedList = new List();

 });
 describe('#add()', () => {
  it('should add to the head of the list', () => {
    assert.strictEqual(linkedList.add(1).head.data, 1);
    assert.strictEqual(linkedList.add(4).head.data, 4);
   });
  });

 describe('#addLast()', () => {
  it('should add a node at the tail', () => {
    linkedList.addLast(44).addLast(55).addLast(66).addLast(77);
    assert.strictEqual(linkedList.getLast().data, 77);
  });
 });
 
 describe('#remove()', () => {
   it('should remove any node', () => {
     linkedList.addLast(44).addLast(55).addLast(66).addLast(77);
     linkedList.remove(55), 
     // if trying to remove again is -1 since doesnt exist but we should have find() instead. Add it to TODO :]
     assert.strictEqual(linkedList.remove(55), -1);
   })
 });
 
});

