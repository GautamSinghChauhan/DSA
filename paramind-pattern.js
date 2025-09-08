//  *
// ***
// *****
// *******
// ********* 


for (let i = 1; i <= 5; i++) {  // Outer loop for rows (5 rows)

    // Inner loop for spaces before stars
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(" "); // Use process.stdout.write to print spaces on the same line
    }

    // Inner loop for stars
    for (let k = 0; k < (2 * i - 1); k++) {
        process.stdout.write("*"); // Print stars on the same line
    }

    console.log(""); // Move to the next line after printing each row
}



// *
// **
// ***
// ****
// *****



for (let i = 1; i <= 5; i++) {  // Outer loop for rows (5 rows)

    
    for (let k = 0; k < i; k++) {
        process.stdout.write("*"); // Print stars on the same line
    }

    console.log("");


}


 
//      *
//     **
//    ***
//   ****
//  ***** 



for (let i = 1; i <= 5; i++) {  // Outer loop for rows (5 rows)

    // Inner loop for spaces before stars
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(" "); // Use process.stdout.write to print spaces on the same line
    }

    // Inner loop for stars
    for (let k = 0; k < i; k++) {
        process.stdout.write("*"); // Print stars on the same line
    }

    console.log(""); // Move to the next line after printing each row
}


