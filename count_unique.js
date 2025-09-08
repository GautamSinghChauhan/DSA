function countunquenumber(arr) {

    if(arr.length) {
        let i=0;

        for(let j=1; j<arr.length; j++) {
            if(arr[i] !== arr[j]) {
                i++;
                arr[i]=arr[j];
            }
        }

        return i+1;
        
    }else{
        throw new Error("Array is empty");
    }

    

}
console.log(countunquenumber([1, 2, 3,3,4, 4, 5, 6, 7, 8, 9,6, 10,11,12]));

