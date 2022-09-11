//7. Write a Javascript Program to extract the first half of a string of even length.

const halfString =(str) => str.slice(0, str.length/2);

console.log(halfString('tigers'));
console.log(halfString('Biology'));
console.log(halfString('Campus'));