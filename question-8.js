//
// 08. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maxValue = (numbers) =>{
    return numbers.reduce((acc,current)=>{
        if(current> acc){
            acc= current
        }
        return acc;
    }, numbers[0])}

console.log(maxValue(numbers))// Output: 10