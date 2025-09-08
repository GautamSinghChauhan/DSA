
// checking sum pair of zero here
// let arrray = [-6,-5,-4,-3,-2,0,2,3,4,7] 



function getSumpairZero(arr){
    for($i=0;$i<arr.length;$i++){
        for($j=$i+1;$j<arr.length;$j++){
            if((arr[$i]+arr[$j])==0){
                console.log(arr[$i],arr[$j]);
            }
        }
    }


}


let arrray = [-6,-5,-4,-3,-2,0,2,3,4,7] 

getSumpairZero(arrray);


let a  =10;
let b  =20;


a = a + b;

b = a - b; // 30 - 20 = 10
a = a - b; // 30 - 10 = 20

console.log ("This is first:" + a);
console.log ("This is second:" + b);
















