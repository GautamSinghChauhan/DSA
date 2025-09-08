function longestsubstring(str) {
    var longest = 0;
    var seen = {};
    var start = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char in seen) {
            start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, i - start + 1);
        // console.log("Test1",longest)
        seen[char] = i + 1;
        console.log(seen[char]);
    }


    return longest;
}

console.log(longestsubstring("abcabcbb"));
