function sum(arr){
    //1. Figure out a simple case as the base case.
    if(arr.length === 0){
        return 0;
    }
    //2. Figure out how to reduce your problem and get to the base case.
    
     return arr.pop() + sum(arr);
   
}



console.log(sum([1,2,3,4]));