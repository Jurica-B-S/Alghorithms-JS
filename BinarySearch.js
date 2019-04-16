'use strict';

//use for array of numbers

function binarySearch(array, number){
  let high = array.length - 1;
  let low = 0;

  if(!Array.isArray(array)){
  throw("Wrong file type - send an array of numbers")
  }
  
  let mid = low +  Math.floor((high - low) / 2);

  while(mid >= low){
    if(array[mid] === number){
      return true;
    }
    if(number < array[mid]){
      high  = mid-1;
      mid = Math.floor((low + high)/2);


    }
    else {
      low  = mid + 1;
      mid = Math.floor((low + high)/2);
    
    }
    
  }
  return false; 
}
