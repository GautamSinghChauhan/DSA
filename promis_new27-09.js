// Function to fetch data with Promise
function getdata() {
    return new Promise((resolve, reject) => {
      fetch('https://api.rootnet.in/covid19-in/stats/latest')
        .then((response) => {
          // Convert response to JSON
          return response.json();
        })
        .then((data) => {
          // Check if there is an error in the response
          if (data.error) {
            reject(data.error); // Reject the promise if an error occurs
          } else {
            resolve(data); // Resolve the promise with the data if successful
          }
        })
        .catch((error) => {
          reject('Network error: ' + error); // Catch and reject the promise with a network error
        });
    });
  }
  
  // Example of how to use the promise
  getdata()
    .then((data) => {
      // Handle the resolved data here (successful fetch)
      console.log('COVID-19 data:', data);
      
      // For example, log the regional data
      data.data.regional.forEach((region) => {
        console.log(`State: ${region.loc}, Confirmed Cases: ${region.totalConfirmed}`);
      });
    })
    .catch((error) => {
      // Handle the rejected error here
      console.error('Error:', error);
    });
  