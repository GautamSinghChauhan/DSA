// Import the http module to create a server
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Set the response HTTP header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send a response message
    res.end('Hello, World!\n');
});

// Make the server listen on port 3030
server.listen(3030, () => {
    console.log('Server is running on http://localhost:3030');
});
