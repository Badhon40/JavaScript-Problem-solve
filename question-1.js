// Question 2: Create an array of objects representing books with properties: title, author, and year.

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