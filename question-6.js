// // 
// 6. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year
// // 


const isLeapYear =( year)=>{
    if(year%4===0 && ( year%100 !==0 || year%400===0)){
        return `${year} is a leap year.`;
    }
    else{
        return `${year} is not a leap year.`;
    }
}

console.log(isLeapYear(2021))// Output: 2020