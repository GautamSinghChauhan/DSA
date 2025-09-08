// function rotateArr(arr, d) {
//     let n = arr.length;

  
//     // Repeat the rotation d times
//     for (let i = 0; i < d; i++) {
    
      
//         // Left rotate the array by one position
//         let first = arr[0];
//         for (let j = 0; j < n - 1; j++) {
     
//             arr[j] = arr[j + 1];
           
//         }
//         arr[n - 1] = first;
       

//     }
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let d = 2;

// rotateArr(arr, d);

// console.log(arr.join(" "));


// function rotateArray(arr, d) {
  
// }


// function rotateArray() {
//     const arr = [1, 2, 4, 7, 9, 10, 12, 18];
//     const prompt = require("prompt-sync")(); // Import prompt-sync for user input
//     const val = parseInt(prompt("Enter the value: ")); // Get the input value

//     const k = val % arr.length; // Calculate rotation index
//     const ans = new Array(arr.length); // Initialize the rotated array
//     let index = 0;

//     // Fill the rotated array starting from index k
//     for (let i = k; i < arr.length; i++) {
//         ans[index++] = arr[i];
//     }

//     // Add the remaining elements from the start of the array
//     for (let i = 0; i < k; i++) {
//         ans[index++] = arr[i];
//     }

//     // Output the rotated array
//     for (let i = 0; i < ans.length; i++) {
//         console.log(ans[i]);
//     }
// }

// // Call the function
// rotateArray();

// function rotateArrayKTimes(arr, k) {
//     k = k % arr.length; // Ensure k is within the bounds of the array length
//     // console.log(k);
//     // console.log(arr.length);
//     const ans = new Array(arr.length); // Initialize the rotated array

//     let index = 0;
  

//     // Fill the rotated array starting from index k
//     for (let i = k; i < arr.length; i++) {
//         ans[index++] = arr[i];
//         // console.log(ans);
//     }

//     // Add the remaining elements from the start of the array
//     for (let i = 0; i < k; i++) {
//         ans[index++] = arr[i];
//         console.log(ans);
//     }

//     return ans;
// }

// // Example Usage
// const arr = [1, 2, 4, 7, 9, 10, 12, 18];
// const k = 3; // Number of rotations
// const rotatedArray = rotateArrayKTimes(arr, k);

// // Print the result
// console.log("Rotated Array:", rotatedArray);

// clock wise 
function rotateArraynew(arr, k) {

    // console.log(arr.length);

     k = k % arr.length; // Ensure k is within the bounds of the array length
    //  console.log("Test", k); //6
    const newarr = new Array(arr.length); // Initialize the rotated array

    let index = 0;

    // Fill the rotated array starting from index k
    for (let i = k; i < arr.length; i++) {
        newarr[index++] = arr[i];
        // console.log(newarr);
    }

    // console.log(newarr);

    // Add the remaining elements from the start of the array
    for (let i = 0; i < k; i++) {
        newarr[index++] = arr[i];
    }

    return newarr;


}
const arr1 = [1, 2, 4, 7, 9, 10, 12, 18];
const k1 = 3; // Number of rotations
const rotatedArraynew = rotateArraynew(arr1, k1);
console.log("Rotated Array:", rotatedArraynew); // Output: [9, 10, 12, 18, 1, 2, 4, 7]

// anti clok wise 


function rotateArrayAntiClockwise(arr, k) {
    k = k % arr.length; // Ensure k is within bounds
    const newarr = new Array(arr.length); // Initialize the rotated array
    let index = 0;

    // Fill the rotated array starting from index `arr.length - k`
    for (let i = arr.length - k; i < arr.length; i++) {
        newarr[index++] = arr[i];
    }

    // Add the remaining elements from the start of the array
    for (let i = 0; i < arr.length - k; i++) {
        newarr[index++] = arr[i];
    }

    return newarr;
}

// Example usage
const arr2 = [1, 2, 4, 7, 9, 10, 12, 18];
const k2 = 3; // Number of rotations
const rotatedArrayAntiClockwise = rotateArrayAntiClockwise(arr2, k2);
console.log("Rotated Array Anti-Clockwise:", rotatedArrayAntiClockwise);


let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
let new_cars = cars.splice(1, 0, 'gautam');
// console.log("cars :", cars);
// console.log("new_cars :", new_cars);
console.log("new_cars :", cars);




