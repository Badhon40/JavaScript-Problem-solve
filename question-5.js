// 5.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.


const  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers =(numbers=>{
    const sum = numbers.reduce((acu, current)=>{
        if(current %2 === 0 ){
            acu +=current
        }
        return acu;
    },0)
    return sum;
})

console.log(sumOfEvenNumbers(numbers))// Output: 3