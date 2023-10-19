const productRoute = require('express').Router();
const { productController } = require('../controllers');

productRoute.get('/', productController.getProducts);
productRoute.get('/:id/', productController.getProductsById);

module.exports = productRoute;