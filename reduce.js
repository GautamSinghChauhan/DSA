

const userdetails = [
    {
        name : "Gautam",
        age : 22,
        city : "delhi",
    },
    {
        name : "Sanjeev",
        age : 30,
        city : "Bareilly",
    },
    {
        name : "Shyam",
        age : 40,
        city : "Bareilly",
    },
    {
        name : "Rahul", 
        age : 40,
        city : "Bareilly",    
    }]

const result = userdetails.reduce((acc,curr) => acc + curr.age,0);
// console.log(result);

let arr=[45,22,14];

const result1 = arr.map((value) => {
// console.log(value);
return value +1;
});
// console.log(result1);

let arr2=[45,22,14];

const result2 = arr.filter( function(value) {
// console.log(value);
return value > 20;
});
//console.log(result2);


let arr3 = [133, 122,11,22,44,55,66,77,88,99];


const result3 = arr3.reduce((acc,curr) => {
    console.log(acc,curr);
    return acc + curr;
},0);

console.log(result3);