const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Sending ALL the dishes to you!');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation requires existing data to be conclude.`);
})
.post((req, res) => {
    res.end(`Adding a new dish named ${req.body.name}`);
})
.delete((req, res) => {
    res.end('Deleting ALL the dishes');
});

dishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Sending the dish ${req.params.dishId} to you`);
})
.put((req, res) => {
    res.end(`Updating the dish ${req.params.dishId} with the information: ${req.body.name}`);
})
.post((req, res) => {
    res.statusCode = 400;
    res.end(`POST operation requires non-existing data to be conclude.`);
})
.delete((req, res) => {
    res.end(`Deleting the dish ${req.params.dishId} :(`);
});

module.exports = dishRouter;