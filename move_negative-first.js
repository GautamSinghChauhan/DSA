// function movenegativeelements(arr) {

//     let start = 0;
//     let end = arr.length-1;
//     let temp;

//     while(start < end){
//         while(arr[start] < 0 && start < end){
//             console.log(arr[start]);
//             start++;
//         }
//         while(arr[end] >= 0 && start < end){
//             end--;
//         }
//         if(start < end){
//             temp = arr[start];
//             arr[start] = arr[end];
//             arr[end] = temp;
//         }
//     }
//     return arr;


// }


// let arr =[-12, 11, -13, -5, 6, -7, 5, -3, -6];

// console.log(movenegativeelements(arr));

class ArrayRearranger {
  
    rearrangeArray(arr) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            // If the left element is negative, move the left pointer
            if (arr[left] < 0) {
                left++;
            }
            // If the right element is positive, move the right pointer
            else if (arr[right] >= 0) {
                right--;
            }
            // Swap the left and right elements
            else {
                [arr[left], arr[right]] = [arr[right], arr[left]];
            }
        }
        return arr;
    }

   
}

// Example usage
const inputArray = [1, -2, -3, 4, 5, -6, -7, 8];
const rearranger = new ArrayRearranger();

console.log("Rearranged Array:", rearranger.rearrangeArray(inputArray));





