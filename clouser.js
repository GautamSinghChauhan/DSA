 const outerFunction = ()=>{
    let outerVariable = "I'm outside!"
    console.log("First")
const innerFunction = () => {
         console.log("Second")
         console.log("i am inner")
        console.log(outerVariable)  // The inner function has access to outerVariable
    }
    console.log("i am Outer again")
    return innerFunction
}

const clouserFunc = outerFunction()
clouserFunc()

function createFunctionArray(){
    let array = []
    // console.log(array)
    for(let i=0;i<10;i++){
        console.log(i)
        array.push(function(){
            console.log(i)
        })
    }
    return array

}

const funcArray = createFunctionArray();
funcArray[0]();  // Logs: 0
funcArray[1]();  // Logs: 1
funcArray[2]();  // Logs: 2


function counter() {
    let count = 0;  // count is enclosed by the inner function (closure)
    
    return function() {
        count++;
        console.log("Current count:", count);
    };
}

const increment = counter();  // Create a new instance of the closure
increment();  // Logs: "Current count: 1"
increment();  // Logs: "Current count: 1"
increment();  // Logs: "Current count: 1"


function sum(a){
console.log("live viewer " + a );
var c = 5;

return function(b){
   return a+b+c;
}

}

let store =sum(2);
console.log(store(4))


function sum1(a,b,c){
    console.log("live viewer " + a,b,c );
return {

    getsum2:function(){
        return a+b;
    },
    getsum3:function(){
        return a+b+c;
    }

}
}

let store1 = sum1(1,2,3);




console.log(store1.getsum2());
console.log(store1.getsum3());