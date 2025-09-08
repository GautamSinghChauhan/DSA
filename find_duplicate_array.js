//find duplicate in this array 

function findduplicate(arr){
    let result = [];
 for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] === arr[j]) {
            if (!result.includes(arr[i])) {
                result.push(arr[i]);
            }
        }
    }

 }
 result.sort((a, b) => a - b);
 return result;



}

const arr = [12, 11, 40, 12, 5, 6, 5, 12, 11];
console.log(findduplicate(arr));


// class Solution {
//     findduplicate(arr){
//         let result = [];
//      for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
    
//             if (arr[i] === arr[j]) {
//                 if (!result.includes(arr[i])) {
//                     result.push(arr[i]);
//                 }
//             }
//         }
    
//      }
//      return result;
    
    
//     }
    
    
//     }
//     const arr = [12, 11, 40, 12, 5, 6, 5, 12, 11];
    
    
//     const solution = new Solution();
//     console.log(solution.findduplicate(arr));