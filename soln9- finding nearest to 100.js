//9. Given two values, Write a javascript program to find out which one is nearest to 100.

const nearTo100 = (n1, n2)=> (100-n1) < (100-n2) ? n1:n2 ;

console.log(nearTo100(12, 45));
console.log(nearTo100(78,15));
console.log(nearTo100(89, 95));