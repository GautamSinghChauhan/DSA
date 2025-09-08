let arr = [1,2,3,4,5,];

console.log(arr[2],arr.length); //3 5

arr.length=0;
console.log(arr[2],arr.length); //3 5

(function fna(a){
    return (function fnb(b){
        console.log(a,b);
    })(1);

})(0);











var a = "Gautam";
let b = "Singh";
const c = "Chauhan";

a = "Ershad";

console.log(a,b,c);
