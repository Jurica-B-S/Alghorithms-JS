'use strict'

//recursive way of calculating a sum
function count(array){
  if(array.length === 1)
   return 1;
  else{
    array.pop();
    return 1 + count(array);
  }
}
