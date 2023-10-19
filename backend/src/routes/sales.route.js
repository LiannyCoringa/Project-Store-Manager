const salesRoute = require('express').Router();
const { salesController } = require('../controllers');

salesRoute.get('/', salesController.getSales);
salesRoute.get('/:id/', salesController.getSalesById);

module.exports = salesRoute;