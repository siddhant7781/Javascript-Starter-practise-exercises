//12.  Write a JavaScript program to find the number of even values up to a given number.

const noOfEvenNumbers = (array) => array.filter(a => a %2===0).length;
const createArrayOfNumbers = (num) => {
    const returnArray =[];
    for(let i=0;i<=num;i++){
        returnArray.push[i];
    }
    return returnArray;
};

console.log(noOfEvenNumbers(createArrayOfNumbers(6)));
