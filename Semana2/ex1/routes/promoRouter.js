const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Sending ALL the promotions to you!');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation requires existing data to be conclude.`);
})
.post((req, res) => {
    res.end(`Adding a new promote named ${req.body.name}`);
})
.delete((req, res) => {
    res.end('Deleting ALL the promotions');
});

promoRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Sending the promote ${req.params.promoId} to you`);
})
.put((req, res) => {
    res.end(`Updating the promote ${req.params.promoId} with the information: ${req.body.name}`);
})
.post((req, res) => {
    res.statusCode = 400;
    res.end(`POST operation requires non-existing data to be conclude.`);
})
.delete((req, res) => {
    res.end(`Deleting the promote ${req.params.promoId} :(`);
});

module.exports = promoRouter;