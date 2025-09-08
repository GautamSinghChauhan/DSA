const mypromiss = new Promise((resolve, reject) => {    
    let success = true;
    if (success) {
        resolve("The promise was resolved successfully!");
    } else {
        reject("The promise was rejected!");
    }
});

mypromiss
    .then((message) => {
        console.log(message); // "The promise was resolved successfully!"
    })
    .catch((error) => {
        console.log(error); // If rejected, this will run
    });


    // Simulate fetching data using a Promise
function fetchdata(){

  return  new Promise ((resolve,reject)=>
    {
        setTimeout(()=>{
            const success = false;
            if(success){
                resolve({data:"Here is Your Data"})
            }else{
                reject("failded to fetch data")
            }

        },2000)
    }
    );

}

 fetchdata().then((respone)=>{
    console.log(respone.data)
 }).catch((reject)=>{
    console.log("Error",reject)
 });



 function fetchUserData(userId){
  
    return new Promise((resolve,resject)=>{
      setTimeout(function() {
        if (userId>1) {
          console.log("this is if condtion");
          resolve({id:userId});
          
        }else{
          resject('Invalid userId')
        }
      }, 2000);
    });
    }
    
    fetchUserData(0).then((userdata)=>
    console.log('user data', userdata)
    ).catch((error)=>{
      console.log('Error', error)
    })