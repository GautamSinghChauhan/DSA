let newarr =[2,3,2,4,3,5,6,7,77,6,44,33,2,2,4,5,6]
let uniquearr2 =[];
let map3 = new Map();

for(let i=0; i<newarr.length; i++){
    if(!map3.has(newarr[i])){
        map3.set(newarr[i],0);
        uniquearr2.push(newarr[i]);
    }else{
        map3.set(newarr[i],map3.get(newarr[i])+1);
    }   
}   
// uniquearr2.sort((a, b) => a - b);

console.log("uniquearr2--------------",uniquearr2,map3);