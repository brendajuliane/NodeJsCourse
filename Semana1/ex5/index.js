const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost'
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))

//next parameter is opcional
app.use((request, response, next) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<html><body><h1>This is an Express Server</h1></body></html>');
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})