

function ReverseArray(array){

    let i = 0;
    let j = array.length - 1;
    let temp;

    while(i < j){
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return array;

}
console.log(ReverseArray([1,2,3,4,5]));

ReverseArray([1,2,3,4,5]);


// now we are using for loop again 

function ReverseArray2(array){

    for(let i = 0; i < array.length / 2; i++){

        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;

    }

}

ReverseArray2([1,2,3,4,5]);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 3, 9, 6, 7, 8, 9];




let sortedArr = arr.slice().sort((a, b) => a - b);
console.log(sortedArr);  // Output: [1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9]



function ReverseArray3(arr){
    let i = 0;
    let j = arr.length - 1;
    let temp;

    while(i < j){

        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
let arr2 = ReverseArray3([1,2,3,4,5,6,7])
console.log("last:",arr2);



function newreverse(arr){
let i=0;
let j = arr.length-1;
let temp;

while(i<j){
    temp=arr[i];
       arr[i] = arr[j];
       arr[j]=temp;
       i++;
       j--;

}
return arr;
}

let arrnew = [1,2,3,5,6,7,8];

newreverse(arrnew);