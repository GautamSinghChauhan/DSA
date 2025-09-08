// Function to fetch data asynchronously
async function fetchData() {
    try {
        let response = await fetch('https://api.rootnet.in/covid19-in/stats/latest');

        
        // Wait for the response to be converted to JSON
        let data = await response.json();
        
        
        console.log("Fetched Data:", data);


        // Log the fetched data
        console.log("Fetched Data:", data);
    } catch (error) {
        // Handle any errors
        console.log("Error fetching data:", error);
    }
}

console.log("Before fetching data");
fetchData(); // Asynchronous call
console.log("After fetching data");

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("The promise was resolved successfully!");
    } else {
        reject("The promise was rejected!");
    }
});

myPromise
    .then((message) => {
        console.log(message); // "The promise was resolved successfully!"
    })
    .catch((error) => {
        console.log(error); // If rejected, this will run
    });

