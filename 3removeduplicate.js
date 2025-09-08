//  remove duplicate value and count frequency here 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let uniquearr = [];
let map = new Map();

for (let i = 0; i < arr.length; i++) {

    if (!map.has(arr[i])) {

        map.set(arr[i], 0);

        uniquearr.push(arr[i]);
        
        console.log(uniquearr);

    }



}

console.log(uniquearr);







