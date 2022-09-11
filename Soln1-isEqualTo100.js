//write a javascript program to check two numbers and return true if one of the number is less or if the sum of the two numbers is 100.

const isEqualTo100 =(a,b)=> a===100||b===100||(a+b)===100; // using arrow function

console.log(isEqualTo100(10,90));
console.log(isEqualTo100(70,90));
console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));
console.log(isEqualTo100(40,60));
