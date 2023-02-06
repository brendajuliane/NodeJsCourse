const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Sending ALL the leaders to you!');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation requires existing data to be conclude.`);
})
.post((req, res) => {
    res.end(`Adding a new leader named ${req.body.name}`);
})
.delete((req, res) => {
    res.end('Deleting ALL the leaders');
});

leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Sending the leader ${req.params.leaderId} to you`);
})
.put((req, res) => {
    res.end(`Updating the leader ${req.params.leaderId} with the information: ${req.body.name}`);
})
.post((req, res) => {
    res.statusCode = 400;
    res.end(`POST operation requires non-existing data to be conclude.`);
})
.delete((req, res) => {
    res.end(`Deleting the leader ${req.params.leaderId} :(`);
});

module.exports = leaderRouter;