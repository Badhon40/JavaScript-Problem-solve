// Create an array of objects representing books with properties like title, author, and year. 

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];


const booksTitle = books.map((book) => book.title);
console.log(booksTitle);