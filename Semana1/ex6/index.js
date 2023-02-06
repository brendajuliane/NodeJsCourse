const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const hostname = 'localhost'
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});
app.get('/dishes', (req, res) => {
    res.end('Will send all the dishes to you!');
});
app.put('/dishes/:dishId', (req, res) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end(`Will update the dish: ${req.body.name} with details: ${req.body.description}`);
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})