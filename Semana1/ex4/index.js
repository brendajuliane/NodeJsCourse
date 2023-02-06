const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
    console.log(`Request for ${request.url} by method ${request.method}`);

    if(request.method == 'GET') {
        let fileURL;
        if(request.url == '/')
            fileURL = '/index.html'
        else
            fileURL = request.url;
        
        let filePath = path.resolve('./public' + fileURL);
        
        if(path.extname(filePath) == '.html') {
            fs.exists(filePath, (exists) => {
                if(!exists) {
                    response.statusCode = 404;
                    response.setHeader('Content-Type', 'text/html');
                    response.end(`<html><body><h1>Error 404: ${filePath} not found</h1></body></html>`);
                } else {
                    response.statusCode = 200;
                    response.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(response);
                }
            })
        } else {
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/html');
            response.end(`<html><body><h1>Error 404: ${filePath} not found</h1></body></html>`);
        }
    } else {
        response.statusCode = 400;
        response.setHeader('Content-Type', 'text/html');
        response.end(`<html><body><h1>Error 404: ${filePath} not found</h1></body></html>`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});