
            
// let arr = [1,1,1,2,2,3,4,5,6,7,7,8,8,8,9,55]





function UniqueNumber(arr) {
  if (arr.length > 0) {
    let i = 0; 

    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {   
        i++;
        arr[i] = arr[j];
      }
    }

    return i + 1;
  } else {
    console.log("Array is Empty");
  }
}

const result = UniqueNumber([1, 1, 1,1, 2, 2,2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 9, 55,56]); // output 10
console.log(result);
