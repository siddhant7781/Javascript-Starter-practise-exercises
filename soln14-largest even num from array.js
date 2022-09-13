//14.  Write a JavaScript program to get the largest even number from an array of intergers.

const largestEven = (array) =>
 Math.max(...array.filter(a => a %2===0));

 console.log(largestEven([1,2,3,4,5,6,7,8,9,10]));
 console.log(largestEven([22, 44,12,34,32,45,65,79,89]));
