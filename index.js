// index.js
const http = require('http');
var dt = require('./myfirstmodule');

// Define the port and hostname
const PORT = 3000;
const HOSTNAME = '127.0.0.1';

// Create the HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the HTTP status code
  res.setHeader('Content-Type', 'text/plain'); // Set the content type
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello, world!\n'); // Send the response
});

// Start the server
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
