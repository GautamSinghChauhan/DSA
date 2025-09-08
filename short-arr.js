function shortarray(arr) {

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;    
        }
    }
}



return arr;

// we want to see unique number

}

console.log(shortarray([2,4,5,8,6,5,4,1]));

// to see unique number

function shortarray(arr) {

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;    
        }
    }
}

let uniqueArray = [arr[0]]; // Start with the first element

for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
        uniqueArray.push(arr[i]);
    }
}

return uniqueArray;

// we want to see unique number with frequncy

}

console.log(shortarray([2,4,5,8,6,5,4,1]));
// to see unique number

function shortarray(arr) {

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;    
        }
    }
}

let uniqueArray = [arr[0]]; // Start with the first element

for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
        uniqueArray.push(arr[i]);
    }
}

return uniqueArray;

// we want to see unique number

}

console.log(shortarray([2,4,5,8,6,5,4,1]));



let object = {
    name : "Gautam",
    age : 22,
    city : "delhi"
}

for(let char in object){
    console.log(`The key are ${char} and value is ${object[char]}`);
    
}
