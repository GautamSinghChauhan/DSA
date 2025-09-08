let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99, 106];

// Find the second largest number directly
let max2 = Math.max(...array2.filter(num => num !== Math.max(...array2)));

console.log("Second Largest Number:", max2);
