//Write a javascript program to replace every character in a agiven string with the character following it in the alphabet.

//input: abcd
// output should be: bcde

const replaceCharacter=(str) => 
str
.split('') // splits the string into array
.map(char=> String.fromCharCode(char.charCodeAt(0)+1)) // then adds their charcode by 1 to the forward
.join(''); // again converts array to string for output

console.log(replaceCharacter('abcde'));
console.log(replaceCharacter('college'));
console.log(replaceCharacter('stockexchange'));



