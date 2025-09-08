let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99, 106,100];

let highest = -Infinity; // Initialize highest to the smallest possible number
let secondHighest = -Infinity; // Initialize second highest to the smallest possible number

for (let i = 0; i < array2.length; i++) {
    if (array2[i] > highest) {
        secondHighest = highest; // Update second highest
        highest = array2[i]; // Update highest
    } else if (array2[i] > secondHighest && array2[i] !== highest) {
        secondHighest = array2[i]; // Update second highest if it's not equal to highest
    }
}

console.log("The second highest value is:", secondHighest);
