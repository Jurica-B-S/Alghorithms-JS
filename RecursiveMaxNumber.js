'use strict'

//recursive way of calculating a sum
function maximum(array, max = Number.MIN_SAFE_INTEGER){
  if(array.length === 0)
   return max;
  else{
    let x = array.pop();
    if(x > max) max = x;
    return maximum(array, max);
  }
}
