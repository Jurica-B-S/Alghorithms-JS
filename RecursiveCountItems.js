'use strict'

//recursive way of calculating a sum
function count(array){
  if(array.length === 1)
   return 1;
  else{
    return 1 + count(array);
  }
}

let polje = [1,2,3,4,5];
