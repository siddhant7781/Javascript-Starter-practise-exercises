//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr){ 
    return arr.reduce((a,b) => a + (b>0 ? b:0),0);
   }
   console.log(positiveSum([1,2,-3,5,-6,-7,-9]));