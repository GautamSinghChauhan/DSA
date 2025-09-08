const library = {
    name:"Gautam",
    location:"Delhi",
    age:22,
    books:["html","css","javascript"]
}

// console.log(library.books[0]);

library.books.push("php");
library.books.unshift("dotnet");
console.log(library.books);
library.books.pop();
console.log(library.books);
library.books.shift();
console.log(library.books);

library.books[2]="python";
console.log(library.books);