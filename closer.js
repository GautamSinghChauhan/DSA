// function fibonacciRecursive(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// // Example usage:
// console.log(fibonacciRecursive(10)); // Output: 8


// // clousere
// function outerFunction() {
//     let outerVariable = "I'm outside!";

//     console.log("i am Outer");
    
//     function innerFunction() {
//         console.log("i am inner");

//         console.log(outerVariable);  // The inner function has access to outerVariable
//     }
//     console.log("i am Outer again");
    
//     return innerFunction;
// }

// const closureFunc = outerFunction();  // outerFunction returns innerFunction
// closureFunc();  // Logs: "I'm outside!"


// clouser
function one() {    
    const username = "John Doe";

    function two() {
        const wesbiste = "Google";
        console.log(username);
    }
//console.log(wesbiste);
 two();
}
// console.log(username);

one();