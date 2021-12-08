//4.2 Write a recursive function to count the number of items in a list.

function sum(arr){
    //1. Figure out a simple case as the base case.
    if(arr.length === 0){
        return 0;
    }
    //2. Figure out how to reduce your problem and get to the base case.
    
     return arr.pop() + sum(arr);
   
}



//console.log(sum([1,2,3,4]));


//4.3 Find the maximum number in a list.
function findMax(arr, length){
    if(length === 1){
        return arr[0];
    }

    return Math.max(arr[length-1], findMax(arr, length - 1))
}

// console.log(findMax([1,2,3,55,4], 5));

//Quicksort

function quicksort(array){
    //Base case: arrays with 0 or 1 element are already “sorted.”
    if(array.length < 2) return array;

    //Recursive case
    let pivot = array[0];
    //Sub-array of all the elements less than the pivot
    let less = [];
    array.forEach((element, index) => {
        if (index < 1) return;
        if(element <= pivot){
            return less.push(element);
        }
   })
    //Sub-array of all the elements greater than the pivot
    let greater = [];
    array.forEach((element, index) => {
        if (index < 1) return;
        if(element > pivot){
            return greater.push(element);
        }
    })
   //combine sub-arrays of less pivot and greater
    const newArray = []
    newArray.push(...quicksort(less), ...[pivot], ...quicksort(greater));
    return newArray;
}

console.log(quicksort([10, 76, 23, 64, 34, 5, 6, 3]));

