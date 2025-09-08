function fabonic(num){

    let a = 0;
    let b = 1;
    // next;

    for(let i=1; i<num; i++){
        let next = a + b;
        a = b;
        b = next;

    }
    return b;

    }
console.log(fabonic(10));

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
       
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const result = fibonacci(10);
console.log(result);
