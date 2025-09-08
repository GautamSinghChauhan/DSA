function frequency(arr,num){
    let respone = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === num){
            respone++;
        }
    }
    return respone;

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = 5;
const result = frequency(arr, num);
console.log(result);