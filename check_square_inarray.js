

// to check in both is square or not in second array 

function checkSquare(arr1,arr2){


    for(let i=0; i<arr1.length; i++){
        let issquare = false;
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]*arr1[i] == arr2[j]){
                issquare = true;

        }
        if(j === arr2.length-1){
            if(!issquare){
                return false;
}
        }

}
}
return true;
}
let arr1 = [1,2,3,4];
let arr2 = [1,4,9,24];



console.log(checkSquare(arr1,arr2))

const buf = Buffer.from([1, 2, 3, 4]); // Creates a buffer of 10 bytes initialized with zeros
console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00>

console.log(buf.toString());
