

// Palindrome 
//peep
// 1.repaper
// 2.racecar
// 3.civic
// 4.mom

function isPalindrome(str) {

    let newstr = str.toLowerCase();
    left = 0;
    right = newstr.length - 1;
    while (left < right) {
        if (newstr[left] !== newstr[right]) {
            return false
        }
        left++;
        right--;
    }

    return true

}

console.log(isPalindrome("civic"));

















































// function isPalindrome(str) {

//     let newstr=str.toLowerCase();
//     let newagain = newstr.split('').reverse().join('');

//     if (newstr === newagain) {
//         return true
//     } else {
//         return false
//     }


// }


// console.log(isPalindrome("peep"))



// function isPalindrome2(str) {

//  for (let i = 0; i < str.length; i++) {

//     // console.log(str[i], str[str.length - 1 - i])
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false
//         }
//     }
//     return true

// }

// console.log(isPalindrome2("peep"));














































// function isPalindrome(str) {
//         // Remove all non-alphanumeric characters
//       str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     //   console.log(str)
    
//         // Reverse the string
//         let reversedStr = str.split('').reverse().join('');
//         console.log(reversedStr)

    
//         // Compare the original and reversed strings
//         return str === reversedStr;
//     }


//     console.log(isPalindrome("gautam"))


//  function isPalindrome2(str) {
//      let newstr = str.toLowerCase();
//      left = 0;
//      right =str.length - 1;
//      while(left < right){
//         if(newstr[left] !== newstr[right]){
//             return false;
//         }
//         left++;
//         right--;

//         }
//         return true;
//  }   

//  console.log(isPalindrome2("gautam"))
