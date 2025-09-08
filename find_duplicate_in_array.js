
// class Solution {
// findDuplicate(arr) {
//     const frequencyMap = {};
//     for(let i=0;i<arr.length;i++){
//        frequencyMap[arr[i]]= (frequencyMap[arr[i]] || 0 )+1;
//     }

//     const Duplicate=[];

//     for(let key in frequencyMap){
//         if(frequencyMap[key]>1){
//             Duplicate.push(Number(key));
//         }

//     }

//     Duplicate.sort((a,b)=>a-b);
//     return Duplicate;
    


// }
// }
// const solution=new Solution();
// console.log(solution.findDuplicate([1,2,3,4,5,4,6,7,2,3]));


function findDuplicate(arr) {
    let shortedarray= arr.sort((a,b)=>a-b);

    let result=[];
    // console.log(shortedarray);

    for(let i=0;i<shortedarray.length-1;i++){
        if(shortedarray[i+1]==shortedarray[i]){
            result.push(shortedarray[i]);
        }

        }
        return result
    }



let arr = [6,5,1, 2, 3, 4, 5, 4, 7, 2, 3];
console.log(findDuplicate(arr));