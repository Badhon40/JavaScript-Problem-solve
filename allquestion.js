// Question 1: Write a function that takes an array of objects and returns an array of names of people who

const people = [
  { name: "Alice", age: 25, gender: "Female" },
  { name: "Bob", age: 30, gender: "Male" },
  { name: "Charlie", age: 22, gender: "Male" },
  { name: "Diana", age: 28, gender: "Female" },
  { name: "Eve", age: 35, gender: "Female" }
];


const filterByGender= (people)=>{
    return people.filter((people)=>people.gender!=="Female").map((people)=>people.name)
}

// console.log(filterByGender(people))



//Question 2: Create an array of objects representing books with properties like title, author, and year. 

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];


const booksTitle = books.map((book) => book.title);
// console.log(booksTitle);



//Question 3: Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (x)=> x * x;
const double = (x)=> x * 2;
const addFive = (x)=> x + 5;

const newFunction = (x) => addFive(double(square(x))); // Compose the functions



// console.log(newFunction(4))// Output: 37



// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.


const cars = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Chevrolet", model: "Malibu", year: 2019 },
  { make: "Nissan", model: "Altima", year: 2022 }
];


const sortCarsByYear = (cars) => {
    return cars.sort((a, b) => a.year - b.year);
    }   

// console.log(sortCarsByYear(cars));




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

// console.log(sumOfEvenNumbers(numbers))// Output: 30


// 6. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.




const isLeapYear =( year)=>{
    if(year%4===0 && ( year%100 !==0 || year%400===0)){
        return `${year} is a leap year.`;
    }
    else{
        return `${year} is not a leap year.`;
    }
}

// console.log(isLeapYear(2021))// Output: 2021


// 7. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];

const uniqueValues = (numbers) => {
    const newArray = numbers.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    return newArray;
}

// console.log(uniqueValues(numbers))// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//
// 08. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maxValue = (numbers) =>{
    return numbers.reduce((acc,current)=>{
        if(current> acc){
            acc= current
        }
        return acc;
    }, numbers[0])}

// console.log(maxValue(numbers))// Output: 10
    

// 09.Task: Advanced Sorting
//Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const students = [
  { name: "Alice", grades: [85, 90, 78] },
  { name: "Bob", grades: [92, 88, 95] },
  { name: "Charlie", grades: [70, 75, 80] },
  { name: "Diana", grades: [88, 92, 85] },
  { name: "Eve", grades: [95, 90, 93] }
];


const calculateAverage = (grades) => {
  const sum = grades.reduce((acc,current)=>{
    acc+= current;
    return acc;
  },0)

  return sum / grades.length;
}

const sortStudentsByAverageGrade = (students) => {
  return students.sort((a, b) => {
    const averageA = calculateAverage(a.grades);
    const averageB = calculateAverage(b.grades);
    return averageB - averageA;
  });
};
// console.log(sortStudentsByAverageGrade(students));



