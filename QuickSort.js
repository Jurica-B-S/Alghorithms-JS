'use strict';

//javascript quicksort
//type 1 ascending, -1 descending
function quicksort(array, type){
  if(type === 1){
    if(array.length < 2) return array;
    else{
      let pivot = Math.floor(array.length / 2);
      let array_left = [];
      let array_right= [];
      for(let i = 0; i < array.length; i++){
        //console.log(pivot,array, array_left, array_right);
        if(array[i] > array[pivot]){
          array_right.push(array[i]);
        }
        if(array[i] <= array[pivot]){
          array_left.push(array[i]);
        }
        
      }
      return quicksort(array_left,1).concat(array[pivot]).concat(quicksort(array_right,1));
    }
  }
}
