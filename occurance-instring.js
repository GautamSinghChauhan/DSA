

function countOccurrence(str) {

//     if(!str)
//         {
// return 0;
//         }

        const map = {};

        str.split("").forEach(element => {
            map[element] = map[element] ? map[element] + 1 : 1;
        });



let max = 0;
let char = '';

// Find the character with the maximum occurrence
for (let k in map) {
    console.log(map[k]);
    if (map[k] > max) {
        max = map[k];
        char = k;
    }
}

return char;
   

}


const string= "Hello World";

console.log(countOccurrence(string));


