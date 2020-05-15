const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

const message = 'Hmesha yaad rkhna';
const message1 = 'Jaako raakhe saiyan maar sake na koi!'
const fullMessage = `<html><body><h1>${message}</h1></body></html>\n`;
const fullMessage = `<html><body><h2>${message1}</h2></body></html>\n`;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(fullMessage);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});