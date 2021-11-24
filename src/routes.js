const { Router } = require('express');
const ResidentController = require('./controllers/ResidentController');

const routes = Router();

routes.get('/residents', ResidentController.index);
routes.get('/residents/:id', ResidentController.show);

module.exports = routes;
