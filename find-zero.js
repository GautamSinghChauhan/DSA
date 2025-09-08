
function findzero(arr) {    

    let paris=[];

    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==0){
                // return [arr[i],arr[j]];
                paris.push([arr[i],arr[j]]);
            }
        }

    }

    return paris;


}

const arrary =[-5,-4,-3,-2,0,1,2,4,6,8,3];
const result = findzero(arrary);
console.log(result);


// new approach 

function findZeroNew(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--; // Move the right pointer leftward
        } else {
            left++; // Move the left pointer rightward
        }
    }

    // If no pair is found, return null or an appropriate message
    return null;
}

const newArr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
const newResult = findZeroNew(newArr);
console.log(newResult);

