
function isAnagram(str1, str2) {
    // Remove any spaces and convert the strings to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    // console.log("str1----", str1);
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // Check if the lengths are different; if so, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters of both strings and compare them
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    console.log("sortedStr1----", sortedStr1);

    return sortedStr1 === sortedStr2;
}

// Example usage
console.log(isAnagram('hello', 'olleh')); // true
console.log(isAnagram('hello', 'world')); // false




function isAnagram2(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let counter = {};
    for(letter of str1) {
        counter[letter] = (counter[letter] || 0) + 1;
    }

    for(letter of str2) {
        if (!counter[letter]) {
            return false;
        } else {
            counter[letter]--;
        }
        
    }

    return true;
}


console.log(isAnagram2('hello', 'olleh')); // true
