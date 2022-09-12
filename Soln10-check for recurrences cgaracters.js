//10. Write a Javascript program to check a givem string contains 2 to 4 occurrences of a specified characters.

const  countChars = ( str, char)=>
str.split('').filter(ch => ch===char).length;

const contains2To4 = (str, char) =>
countChars(str, char)>= 2 && countChars(str, char)<=4;

console.log(contains2To4('ooh', 'o'));
console.log(contains2To4('sarcasm', 's'));
console.log(contains2To4('Beautiful', 'a'));


