const salesRoute = require('express').Router();
const { salesController } = require('../controllers');

salesRoute.get('/', salesController.getSales);
salesRoute.post('/', salesController.insertSales);
salesRoute.get('/:id/', salesController.getSalesById);

module.exports = salesRoute;