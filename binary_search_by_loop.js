


function searchAlong(array,num){
    let min = 0;
    let max = array.length - 1;
    let mid = 0;
    while(min <= max){
        mid = Math.floor((min + max) / 2);
        console.log("");
         console.log(mid);
        // how to add breack here
    

        if(array[mid] == num){
            //  console.log(mid);
            return mid;
        }else if(array[mid] < num){
            min = mid + 1;
            console.log(min);
        }else{
            max = mid - 1;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 5;  

console.log(searchAlong(arr,num));