const salesRoute = require('express').Router();
const { salesController } = require('../controllers');
// const {
//   salesValidations,
//   // salesValidationsLength,
//   salesValidationsProductId,
// } = require('../middlewares');

salesRoute.get('/', salesController.getSales);
salesRoute.post('/', salesController.insertSales);
salesRoute.get('/:id/', salesController.getSalesById);

module.exports = salesRoute;