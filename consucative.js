// function findLargestSumOf4Numbers(array, num) {
//     if (num > array.length) {
//         throw new Error("num is greater than array length");
//     }

//     // Initialize max and temp with the sum of the first `num` elements
//     let max = 0;
//     let temp = 0;

//     for (let i = 0; i < num; i++) {
//         max += array[i];
//         console.log(max);
//     }

//     temp = max;

//     // Slide the window across the array
//     for (let i = num; i < array.length; i++) {
//         temp = temp - array[i - num] + array[i];
//         if (temp > max) {
//             max = temp;
//         }
//     }

//     return max;
// }

// let result2 = findLargestSumOf4Numbers([1, 2, 3, 4, 5, 6, 7, 8, 3, 9, 6, 7, 8, 9], 4);
// console.log(result2);

function findlargestof4No(arr, num) {
  if (num > arr.length) {
    throw new Error("num is greater than array length");
  }
  let max = 0;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 3, 9, 6, 7, 8, 9];
let num = 4;
let ressult = findlargestof4No(arr, num);
console.log(ressult);
