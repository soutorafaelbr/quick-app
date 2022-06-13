const express = require('express');

const routes = express.Router();
const eventController = require('../Controllers/event.controller');
const balanceController = require('../Controllers/balance.controller');
const resetController = require('../Controllers/reset.controller');

routes.get('/event', eventController.get);
routes.get('/balance', balanceController.get);
routes.get('/reset', resetController.get);

module.exports = routes;