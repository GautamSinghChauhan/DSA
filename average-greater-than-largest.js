let arr = [5, 15, 10, 25, 30, 40, 44, 55, 80];

let average=0;
let greatethanvalu=[];

for(let i=0;i<arr.length;i++){
    average+=arr[i];
}

average=average/arr.length;
let avg = Math.round(average);
console.log(avg);
ē

for(let i=0;i<arr.length;i++){
    if(arr[i]>average){
        greatethanvalu.push(arr[i]);
    }
}
console.log(greatethanvalu);

