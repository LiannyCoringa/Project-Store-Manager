const salesRoute = require('express').Router();
const { salesController } = require('../controllers');
const validationsSales = require('../middlewares/validationsSales');
const validationsSalesProducts = require('../middlewares/validationsSalesProducts');

salesRoute.get('/', salesController.getSales);
salesRoute.post('/', validationsSales, salesController.insertSales);
salesRoute.get('/:id/', salesController.getSalesById);
salesRoute.delete('/:id/', salesController.deleteSale);
salesRoute.put(
  '/:saleId/products/:productId/quantity/',
  validationsSalesProducts,
  salesController.updateSale,
);

module.exports = salesRoute;