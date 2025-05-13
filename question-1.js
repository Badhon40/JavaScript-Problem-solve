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

console.log(filterByGender(people))