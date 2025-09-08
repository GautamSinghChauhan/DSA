

let userdetails = {
    name : "Gautam",
    age : 22,
    city : "delhi",
   
}

let pinrtdetails=function ( country, state){ 
    console.log(this.name, this.age, this.city, country, state);
}

pinrtdetails.call(userdetails);

let userdetails2 = {
    name : "Sanjeev",
    age : 30,
    city : "Bareilly",
}

pinrtdetails.call(userdetails2, "India", "Uttar Pradesh");
pinrtdetails.apply(userdetails2, ["India", "Uttar Pradesh"]);

let newfun = pinrtdetails.bind(userdetails2, "India", "Uttar Pradesh");
console.log(newfun);
newfun();