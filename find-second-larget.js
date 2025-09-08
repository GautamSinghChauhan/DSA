function findSecondLargest(arr) {

    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) { 
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === largest ? -1 : secondLargest;


}

console.log(findSecondLargest([5, 15, 10, 25, 30, 40, 44, 55, 80]));