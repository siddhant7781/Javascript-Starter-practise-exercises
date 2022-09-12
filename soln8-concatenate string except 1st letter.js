//8. Write a JavaScript program to concatenate two strings except their first character.

const concatenate=( str1, str2)=> str1.slice(1) + str2.slice(1);

console.log(concatenate('hello', 'developer'));