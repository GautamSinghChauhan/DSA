const arr= [1,2,4,6,7];
const k = 3;



for(let i=0;i<k;i++){
    let temp = arr[arr.length-1];
    for(let j=arr.length-1; j>0; j--){
        arr[j] = arr[j-1];
    }
    arr[0] = temp;
}
console.log(arr);


// const arr = [1, 2, 4, 6, 7];
// const k = 3;

// // Calculate effective rotations
// const rotations = k % arr.length;

// // console.log(rotations);

// // Perform the rotation
// // const rotatedArr = arr.slice(-rotations).concat(arr.slice(0, -rotations));
// // const rotatedArr = arr.slice(rotations).concat(arr.slice(0, rotations));
// // const rotatedArr2 = arr.slice(0, -rotations);
// // const rotatedArr = arr.slice(rotations).concat(arr.slice(0, rotations)).reverse();
// const rotatedArr = arr.slice(rotations);

// console.log(rotatedArr);

