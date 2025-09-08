function hello(){
    if(true){
        var name = "Gautam";
    let age = 22;
    const city = "Delhi";
    }

    // console.log(name);
    // console.log(age);
 
}



hello();

//Closure  in javascript

function outerFunction(outerFunctionVariable) {

    return function innerFunction(innerFunctionVariable) {

        // console.log(`outerFunctionVariable: ${outerFunctionVariable}`);
        // console.log(`innerFunctionVariable: ${innerFunctionVariable}`);

    }

}

const newfun = outerFunction('outside');

newfun('inside');

// async function

async function fetchData() {
    const response = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
    const data = await response.json();
    console.log(data);
}

fetchData();