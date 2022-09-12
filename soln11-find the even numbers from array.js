//11. Write a JavaScript program to find the number of even digits in a array of integers.

const noOfEvenNumbers = (array) => array.filter(a => a %2===0).length;

console.log(noOfEvenNumbers([1,2,4,6,8,9,0,11,34,23]));
console.log(noOfEvenNumbers([1,3,5,7,9]));
console.log(noOfEvenNumbers([1,4,9,16,25,36,49,64,81,100]));