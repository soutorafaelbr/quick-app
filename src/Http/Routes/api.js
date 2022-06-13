const express = require('express');

const routes = express.Router();
const eventController = require('../Controllers/event.controller');
const balanceController = require('../Controllers/balance.controller');

routes.get('/event', eventController.get);
routes.get('/balance', balanceController.get);

module.exports = routes;