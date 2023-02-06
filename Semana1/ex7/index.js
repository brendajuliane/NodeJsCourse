const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishesRouter');

const hostname = 'localhost'
const port = 3000;

const app = express();
app.use('/dishes', dishRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})