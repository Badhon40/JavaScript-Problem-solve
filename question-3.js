// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (x)=> x * x;
const double = (x)=> x * 2;
const addFive = (x)=> x + 5;

const newFunction = (x) => addFive(double(square(x))); // Compose the functions



console.log(newFunction(4))// Output: 37
console.log(newFunction(5))// Output: 55
console.log(newFunction(6))// Output: 77