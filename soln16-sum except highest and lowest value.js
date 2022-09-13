// 16.Sum all the numbers of a given array, except the highest and the lowest element ( by value, not by index! ). return 0 if array is null,none or nothing.

const sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;

console.log(sumArray([1, 3, 5, 7, 9]));