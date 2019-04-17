'use strict'

function binarySearch(array, number, low, high){
  let mid = Math.floor((high + low) / 2);
  console.log(mid, array[mid], number);
  if(number === array[mid]){
      return true;
    }
  else if((mid < high) && (mid > low)){
    if(array[mid] < number){
      console.log(low, mid, high);
      return binarySearch(array, number, mid+1, high);
      
    }
    if(array[mid] > number){
      console.log(low, mid + 1, high);
      return binarySearch(array, number, low,mid - 1);
      
    }
  }
  else{
    return false;
  }
}
