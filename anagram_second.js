
function areAnagrams(str1, str2) {
    var firststr = str1.split("");
   console.log(firststr);
    return str1.split("").sort().join("") === str2.split("").sort().join("");
   
   }
   console.log(areAnagrams("listen", "silent")); // true