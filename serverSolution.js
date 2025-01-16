const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
  request.on('close', () => {
    //Cleanup any resources here if needed
  });
};

const server = http.createServer(requestListener);

//Improved error handling to detect and handle potential issues gracefully
server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});