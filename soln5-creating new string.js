//5. Write a javascript program to create a new string adding "New!" in front of a given string. If the givem string begins with "New!" already then return the original string.

const addNew = (str) => str.indexOf('New!')===0?str: `New! ${str}`;

console.log(addNew('Telephone'));

console.log(addNew('New! car'));