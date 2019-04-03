// @param {[number]} array - sorted array
function bsRecursive(array, target) {
 if(!array.length) {
  console.log('no elements');
  return null;
 }
 // verify array is sorted
 // TODO: sort array if not sorted
 if(!isSorted(array)) {
  console.log('array is not sorted');
  return null;
 }
 return bsRecursiveHelper(array, 0, array.length, target);
}

function bsRecursiveHelper(array, left, right, target) {
 // base case
 if(left > right) {
  return;
 }

 let middle = Math.floor((left + right) / 2);
 if(array[middle] === target) {
  return middle;
 } else if(array[middle] < target) {
    return bsRecursiveHelper(array, middle + 1, right, target);
 } else {
   // do I need to return the call ?
   return bsRecursiveHelper(array, left, middle - 1, target);
 }
}

function isSorted(array) {
 // using selection sort which is O(n) best case for sorted array
 for(let i = 1; i < array.length; i++) {
  if(array[i] < array[i-1]) {
   return false;
  }
 }
 return true;
}

module.exports = bsRecursive;
