function moveZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count] = arr[i];
            count++;
        }
    }
    while (count < arr.length) {
        arr[count] = 0;
        count++;
    }
    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));

// by me 

function pushZerosToEnd(arr){
    let n = arr.length;
    let result  = new Array(n);
    let index = 0;
  
   for (var i = 0; i < n; i++) {
  if(arr[i] !== 0){
    result[index]=arr[i];
    // console.log(`Added ${arr[i]} to result[${index}]`);
    index++;
  
  }
   }
    // console.log("Non-zero elements added:", result.slice(0, index)); // Show the non-zero elements
    while(index<n){
      result[index]=0;
      // console.log(`Filling result[${index}] with 0`);
       index++;
    }
    
    for (let i = 0; i < n; i++) {
      arr[i] = result[i];
    }
     console.log("Final modified array:", arr);
  
      return arr;
  }
  
  const arr = [1, 2, 0, 4, 3, 0, 5, 0];
  pushZerosToEnd(arr);

  const add={
    city:"delhi",
    street:"Gali No.22"
  }

add.pincode=110001;

console.log(add);


const obj = { name: "John", age: 30 };

Object.freeze(obj);

obj.age = 35; // No effect
obj.city = "New York"; // No effect
delete obj.name; // No effect

console.log(obj); // { name: "John", age: 30 }

function sum(){
  let a =10;
  const b = 20;
  var c = a+b;
}


sum();

