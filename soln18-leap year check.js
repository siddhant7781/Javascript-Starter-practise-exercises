
//18. Given a year, report if it is a leap year.

const isLeapYear =(year) => year%4===0;
// leap years happens in every 4 years thus the year divisible by 4 is leap year.

console.log(isLeapYear(2014));
console.log(isLeapYear(2026));
console.log(isLeapYear(2048));