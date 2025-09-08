//  let arr = [5,15,10,25,30,40,44,55]
// find largest 
function largestNumber(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
  }

  let lareget = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (lareget < arr[i]) {
      lareget = arr[i];
      // console.log(lareget);
    }
  }

  return lareget;
}

let arr = [5, 15, 10, 25, 30, 40, 44, 55, 80];
let largest = largestNumber(arr);
console.log(largest);
