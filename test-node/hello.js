// Load HTTP module
const http = require('http');

const HOSTNAME = '0.0.0.0';
const PORT = 8000;

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello World"
    res.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
})