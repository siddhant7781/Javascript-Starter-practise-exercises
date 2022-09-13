//13. Write a Javascript program to check whether a given array of integers is in ascending order.

const isAscending =(array) => {
    for( let i=0;i< array.length;i++){
        if(array[i+1] < array[i]){
            return false;
        }
    }
    return true;

}
console.log(isAscending([1,2,3,4,5]));
console.log(isAscending([1,4,3,9,5]));
console.log(isAscending([15, 12, 56, 23,9]));