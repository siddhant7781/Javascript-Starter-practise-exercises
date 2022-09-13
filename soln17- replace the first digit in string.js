// Write a JavaScript Program to replace first digit in a string (should contains at least digit) with $ character.

const replaceFirstDigit=(str)=>str.replace(/[0-9]/g,'$');
//str.replace(/[0-9]/g,'$') - will replace all digits, g means global.


console.log(replaceFirstDigit('absd45uhui'));
console.log(replaceFirstDigit('1wtyudgyugd'));