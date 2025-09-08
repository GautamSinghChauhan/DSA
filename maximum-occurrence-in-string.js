function getCharaString(str) {
    const map = {};

    // Convert the string to lowercase and split into characters (not words)
    str.toLowerCase().split("").forEach(element => {
        if (element !== " ") {  // Ignore spaces
            map[element] = map[element] ? map[element] + 1 : 1;
        }
    });

    console.log("Character counts:", map);

    let max = 0;
    let char = '';

    // Find the character with the maximum occurrence
    for (let k in map) {
        if (map[k] > max) {
            max = map[k];
            char = k;
        }
    }

    return char;
}

let str = "hello World";

let char = getCharaString(str);

console.log("Character with maximum occurrence:", char.toUpperCase());


function getCharaString2(str) {
    const map = {};
    let maxChar = '';
    let maxCount = 0;

    // Convert string to lowercase and split it into characters
    str.toLowerCase().split("").forEach(char => {
        if (char !== " ") {  // Ignore spaces
            // Increment the count of the character in the map
            map[char] = (map[char] || 0) + 1;

            // Update the most frequent character and its count
            if (map[char] > maxCount) {
                maxCount = map[char];
                maxChar = char;
            }
        }
    });

    return maxChar.toUpperCase();  // Return the result in uppercase
}

let str2 = "hello World";
let char2 = getCharaString2(str2);
console.log("Character with maximum occurrence:", char);

