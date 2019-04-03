function quickSort(array) {
 if(!array) throw new Error('Array not present', array);
 return sort(array, 0, array.length - 1);
}

function sort(array, left, right){
 if(left < right) { // <= ?
  return;
 }
 let pivot = swapSort(array, left, right); // Pivot is considered to be sorted
 sort(array, left, pivot - 1);
 sort(array, pivot + 1, right);
}

function swapSort(array, left, right) {
 if (!array.length) return [];

 // Pivot can be random. For this implementation let's use right most
 let pivot = array[right];

 while(left <= right) {
   while(array[left++] < pivot && left < array.left)
   while(array[right--] > pivot && right >= 0)
   swap(array, left, right);
 }
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

module.exports = quickSort;
