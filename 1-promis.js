

function printnowithoutloop(n){

    if(n>0){
        printnowithoutloop(n-1);
        console.log(n);
    }

}

let n= 10;

printnowithoutloop(n);



let a =10;
let b = a++;
console.log(b); //10
console.log(a+b); //21