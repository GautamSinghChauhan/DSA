function largestSumOf4Numbers(array, num) {
    if (num > array.length) {
        throw new Error("num is greater than the array length");
    }

    let largestSum = 0;

    // Calculate the sum of the first `num` elements
    for (let i = 0; i < num; i++) {
        largestSum += array[i];
        // console.log(largestSum);
    }

    let currentSum = largestSum;


    // Slide through the array to find the maximum sum
    for (let i = num; i < array.length; i++) {
        // Subtract the element that is going out of the window and add the new element
        currentSum = currentSum - array[i - num] + array[i];
        // console.log("second", currentSum);

        if (currentSum > largestSum) {
            largestSum = currentSum;
        }
    }

    return largestSum;
}

const result = largestSumOf4Numbers([1, 2, 3, 4, 5, 6, 7, 8, 3, 9, 6, 7, 8, 9], 4);
console.log("Gautam" , result);


function largestSumOf4Numbers2(array, num) {

    if (num > array) {
       throw new Error("num is greater than array");
    }


    let sum = 0;

    let largestSum = 0;

    for (let i = 0; i < array.length - num + 1; i++) {

        for (let j = i + 1; j < i + num; j++) {
            sum += array[j];

        }

        if (sum > largestSum) {

            largestSum = sum;

        }

        sum = 0;

    }

    console.log(largestSum);




   
}




    largestSumOf4Numbers([1,2,3,4,5,6,7,8,3,9,6,7,8,9], 4);


    function findlargetsumof4numbers(array, num) {

        if (num > array) {
            throw new Error("num is greater than array");
        }else {

            max = 0;

            for (let i = 0; i < array.length - num + 1; i++) {

                let temp = 0;

                for (let j = 0; j < num; j++) { 
                    
                  temp += array[i+j];
                    if (temp > max) {
                        max = temp;
                    }
        }

    }

    return max;
}



    }

    let result2 = findlargetsumof4numbers([1,2,3,4,5,6,7,8,3,9,6,7,8,9], 4);

    console.log(result2);



    

  
