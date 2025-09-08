// let arr = [3, 5, 7, 2, 8,55];

// let minValue = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > minValue) {
//         minValue = arr[i];
//     }
    
// }

// console.log(minValue); 

let maxvaluearr = [3,5,6,8,22,44];
let maxvalue = maxvaluearr[0];

for (let i = 1; i<maxvaluearr.length; i++) {
    // console.log(maxvaluearr[i]);
    if(maxvaluearr[i] > maxvalue) {
        maxvalue = maxvaluearr[i];
    }
}

console.log("Test" + maxvalue);

let a = {
    name : "Gautam",
    age : 22,
    city : "delhi"
}

console.log(a);