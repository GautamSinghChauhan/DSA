
// check element on index  by Binary Search Algorithm 

function searchAlong(array,num){
    let min = 0;
    let max = array.length - 1;
    let mid = 0;
    while(min <= max){
        mid = Math.floor((min + max) / 2);
        // console.log(mid);

        if(array[mid] == num){
            // console.log(mid);
            return mid;
        }else if(array[mid] < num){
            min = mid + 1;
        }else{
            max = mid - 1;
        }
    }
    return -1;
}

const result = searchAlong([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11], 5);
console.log(result); // output: 4




