let arr1 = [1, 2, 2, 1];
let arr2 = [2,2];

let intersectionarray = arr1.filter((value) => arr2.includes(value));
let newarr = [...new Set(intersectionarray)];
console.log(newarr)

// now we want by loop 

function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }
    return result;
}

console.log(intersection(arr1, arr2));


function intersection(arr3, arr4) {
    let result = [];
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                // Check if the value is already in the result array to avoid duplicates
                if (!result.includes(arr1[i])) {
                    result.push(arr1[i]);
                }
            }
        }
    }

    return result;
}

// Example arrays
let arr3 = [1, 2, 2, 1];
let arr4 = [2, 2];

console.log(intersection(arr3, arr4));  // Output: [2]

