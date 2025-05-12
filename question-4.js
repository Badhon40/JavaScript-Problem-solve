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

console.log(sortCarsByYear(cars));