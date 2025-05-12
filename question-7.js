// 7. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];

const uniqueValues = (numbers) => {
    const newArray = numbers.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    return newArray;
}

console.log(uniqueValues(numbers))// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
