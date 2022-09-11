// write a javascript program to get the extension of a filename.


const getFileExtension=(str)=>str.slice(str.lastIndexOf("."));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('myessay.txt'));
console.log(getFileExtension('element.config.js'));