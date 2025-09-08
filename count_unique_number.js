// we want to check how many unique numbers are there in the array we want to count of all uniuque numbers

// here we are count only uniuque numbers 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,6, 10];

let frequencyMap = {};
let uniqueCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (!frequencyMap[arr[i]]) {
        // console.log(arr[i]);
        // If the number is not in the map, it's unique so far
        frequencyMap[arr[i]] = 1;
        uniqueCount++;
        // console.log(frequencyMap);
    }
    //  console.log(frequencyMap);
    // If the number is already in the map, we don't change the unique count
}

console.log("Number of unique numbers:", uniqueCount);


function countunquenumber(arr) {

    if(arr.length) {
        let i=0;

        for(let j=1; j<arr.length; j++) {
            if(arr[i] !== arr[j]) {
                i++;
                arr[i]=arr[j];
            }
        }

        return i+1;
        
    }else{
        throw new Error("Array is empty");
    }

    

}
console.log(countunquenumber([1, 2, 3,3,4, 4, 5, 6, 7, 8, 9,6, 10,11,12]));











