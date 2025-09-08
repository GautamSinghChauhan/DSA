// function findsecondhigest(arr){
//     if(arr.length<3){
//         return "Make greater than 2 value in this array"
//     }

//     let higest=-Infinity;
//     let secondhigest=-Infinity;
//     let thirdhigest=-Infinity;
//     for(let i=0;i<arr.length;i++){
//         // console.log((arr[i]>higest));
//         if(arr[i]>higest){
//             secondhigest=higest;
//             higest=arr[i];
//             //  console.log(higest);
//             //  console.log(secondhigest);

//         }else if(arr[i]>secondhigest && arr[i]<higest){
    

//             secondhigest=arr[i];
//         }
        
//     }

//     return secondhigest=== -Infinity ? higest : secondhigest;


// }

// // console.log(findsecondhigest[1,2,3,4,5,6,7,8,9]);
// console.log(findsecondhigest([5, 12, 3, 7, 12]));





// find second largest number in array

let array2 = [1,2,3,4,5,6,7,8,9,10,99,106];
let max1 = Math.max(...array2);
let max2 = Math.max(...array2.filter(num => num !== max1));
console.log(max2);

function findNthHighest(arr, n) {
    if (arr.length < n) {
        return `Array must have at least ${n} numbers`;
    }

    // Manual sorting of the array in descending order
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                // Swap arr[i] and arr[j]
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    // console.log(arr);

    // Handle duplicates by creating a unique sorted array
    let uniqueArray = [arr[0]]; // Start with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray.length >= n ? uniqueArray[n - 1] : `No ${n}th highest number`;
}

// Example usage
let numbers = [5, 12, 3, 7, 12, 15, 15];
console.log(findNthHighest(numbers, 2)); 