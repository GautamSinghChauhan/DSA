
// first approach 
function bubbleSort(arr) {
    let n = arr.length;
    for (let i=0; i<n-1; i++) {
        for (let j=0; j<n-i-1; j++) {
            if( arr[j] > arr[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return arr;

}

let array = [4, 3, 7, 1, 5];

console.log(bubbleSort(array));

// second  approach 
function bubbleSort(arr) {
    let n = arr.length;
    for (let i=n; i>0; i--) {
        for (let j=0; j<i-1; j++) {
            if( arr[j] > arr[j+1]) {
                [array2[j], array2[j+1]] = [array2[j+1], array2[j]];
            }
        }
    }
    return arr;

}

let array2 = [4, 3, 7, 1, 5];

console.log(bubbleSort(array2));