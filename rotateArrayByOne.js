// function rotateArrayByOne(arr) {
//     if(arr.length==0){
//         return arr;
// }
// const lastelement=arr.pop();
// arr.unshift(lastelement);
// return arr
// }

// console.log(rotateArrayByOne([1, 2, 3, 4, 5]));


// Now we make by loop 

function rotateArrayByOne2(arr){
    if(arr.length==0){
        return arr;
    }
    let n = arr.length;
    let last = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
        console.log(i);
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
    return arr;
   

}

console.log(rotateArrayByOne2([1, 2, 3, 4, 5]));