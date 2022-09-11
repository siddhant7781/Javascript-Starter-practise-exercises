//Write a javascript to get the current date.
// expected output: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const todayDate= (date= new Date()) =>{
    const days= date.getDate();
    const months = date.getMonth() +1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;

}
console.log(todayDate());