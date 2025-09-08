function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

let array = [5, 3, 6, 2, 10];
console.log(insertionSort(array));  

function insertionSort2(array){
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i-1;
        while(j>=0 && array[j]>current){
           array[j+1] =array[i];
           j--;
        }
        array[j+1] = current;
}
return array;
}

let array2 = [5, 3, 6, 2, 10];
console.log(insertionSort2(array2));
