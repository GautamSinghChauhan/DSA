const arr =[2,3,4,5,6,3,4,5,78,2,3,5,6]
const payload = new Map ()

console.log(payload);
const newArray = []

for(let i=0 ; i<arr.length; i++){
    if(!payload.has(arr[i])){
        payload.set(arr[i],1)
        newArray.push(arr[i])
    }else{
        payload.set(arr[i],payload.get(arr[i])+1)
    }
}

console.log("Array----",newArray)
console.log("payload----",payload)



// exit();
const newPayload = {}

for(const data of arr){
    //console.log(data);
    newPayload[data] = (newPayload[data] | 0)+1
    console.log(newPayload);
}







const newArraypayload = []

for(const data in newPayload){
    newArraypayload.push(data)
}

console.log("newPayload-----",newArraypayload)



// console.log("Array----",newArray)
// console.log("payload----",payload)



const arr1 =[2,3,4,5,6,3,4,5,78,2,3,5,6];

const uniquearr=[];
const seen={};

for(let i=0; i<arr1.length;i++){
    if(!seen[arr1[i]]){
        uniquearr.push(arr1[i]);
        seen[arr1[i]]=1;
    }else{
        seen[arr1[i]]= seen[arr1[i]]+1;

    }
}

console.log("uniquearr--------------",uniquearr,seen);



let newarr =[2,3,2,4,3,5,6,7,77,6,44,33,2,2,4,5,6]
let uniquearr2 =[];
let map3 = new Map();

for(let i=0; i<newarr.length; i++){
    if(!map3.has(newarr[i])){
        map3.set(newarr[i],1);
        uniquearr2.push(newarr[i]);
    }else{
        map3.set(newarr[i],map3.get(newarr[i])+1);
    }   
}   
uniquearr2.sort((a, b) => a - b);

console.log("uniquearr2--------------",uniquearr2,map3);