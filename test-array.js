let array = [2,3,5,2,6,7,8,99];

// array.push(77);
let arr = array.includes(2);
console.log(arr);


// Array of numbers
let numbers = [10, 20, 30, 40, 50];

// Use find to get the first number greater than 25
let foundNumber = numbers.find(function(number) {
  return number > 10;
});

console.log(foundNumber); // Output: 30
