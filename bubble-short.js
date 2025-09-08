// let arr = [40, 5, 10, 15, 20, 30,66,88,82,90];


function bubbleSort(arr) {
    let n = arr.length;
    // console.log(n);
    for (let i = 0; i < n - 1; i++) {
          console.log(n - i - 1);
        let swapped = false; // Flag to check if any swaps happened in this iteration
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
            //console.log(arr); // Print array after each swap
        }
        // If no two elements were swapped by inner loop, break
        if (!swapped) {
            break;
        }
    }
    return arr;
}

let arr = [40, 5, 10, 15, 20, 30,66,88,82,90];
let sortedArray = bubbleSort(arr);
console.log("Sorted Array:", sortedArray);































function bubbleSort2(array) {
    for (let i = array.length; i > 0; i--) {
        let isSwapped = false;  // Initialize isSwapped for each pass

        for (let j = 0; j < i - 1; j++) {  // Corrected loop condition
            if (array[j] > array[j + 1]) {
                // Swap array[j] and array[j + 1]
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }

        // If no elements were swapped, the array is already sorted
        if (!isSwapped) {
            break;
        }
    }
    return array;
}

// Example usage:
const res = bubbleSort2([8, 1, 2, 3, 4, 5, 6, 7]);
console.log(res);

