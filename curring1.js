


function addition(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }

}

// let res = addition(2);
// let res1 = res(3);
// let res2 = res1(4);
// console.log(res2);

console.log(addition(2)(3)(4));



