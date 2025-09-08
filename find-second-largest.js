

let array2 = [1,2,3,4,5,6,7,8,9,10,99,106];
let max1 = Math.max(...array2);
let max2 = Math.max(...array2.filter(num => num !== max1));
console.log(max2);




let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99, 106];

// Find the maximum value in the array
let max5 = Math.max.apply(null, array2);

// Remove the maximum value from the array
let filteredArray = array2.filter(function(num) {
    return num !== max1;
});

// Find the second maximum value in the remaining array
let max6 = Math.max.apply(null, filteredArray);

console.log("Second Largest Number:", max2);





