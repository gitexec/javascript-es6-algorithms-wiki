function Sort(array){
  if(array.length === 1) {
   return array; 
  }

  let middle = Math.floor(array.length / 2);
  let left = sort(array.slice(0, middle);
  let right = sort(array.slice(middle, array.length);
  
  return merge(left, right); 
}

function merge(array1, array2) {
 let i = 0;
 let j = 0;

 while(i < array1.length && array2.length < j){
  if(array1[i] < array2[j]) {
   merged.push(array1[i++]);
  } else {
   merged.push(array2[j++]);
  }
 }
 while(i < array1.length) {
  merged.push(array1[i++]);
 }
 while(j < array2.length) {
  merged.push(array2[j++]);
 }
 return merged;
}
module.exports = Sort;
