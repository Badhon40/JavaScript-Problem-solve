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
console.log(sortStudentsByAverageGrade(students));


