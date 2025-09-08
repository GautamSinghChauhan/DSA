

let arr1 = [1,2,3,4,5,6,7];


let sum = arr1.map(num => num).reduce((acc, curr) => acc + curr, 0);




console.log(sum)


function convertToUppercase(str) {
        return str.map(char => char.toUpperCase());
    }

    console.log(convertToUppercase(["hello"]))


function convertToStrings(arr) {
        return arr.map(item => item.toString());
    }

    console.log(convertToStrings([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


    function findmax(arr) {
        return arr.reduce((max,current)=>(current>max?current:max,Infinity));
    }

    console.log(findmax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));