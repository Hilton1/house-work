const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => response.send('Hello World'));

module.exports = routes;
