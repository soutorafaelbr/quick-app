import express from 'express';
import eventController from '../Controllers/event.controller.js';
import balanceController from '../Controllers/balance.controller.js';
import resetController from '../Controllers/reset.controller.js';

const routes = express.Router();

routes.post('/event', eventController.post);
routes.get('/balance', balanceController.get);
routes.get('/reset', resetController.get);

export default routes;