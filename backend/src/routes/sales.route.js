const salesRoute = require('express').Router();
const { salesController } = require('../controllers');
const validationsSales = require('../middlewares/validationsSales');

salesRoute.get('/', salesController.getSales);
salesRoute.post('/', validationsSales, salesController.insertSales);
salesRoute.get('/:id/', salesController.getSalesById);

module.exports = salesRoute;