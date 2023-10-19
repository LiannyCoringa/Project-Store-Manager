const productRoute = require('express').Router();
const { productController } = require('../controllers');

productRoute.get('/', productController.getProducts);
productRoute.get('/:id/', productController.getProductsById);
productRoute.post('/', productController.insertProduct);

module.exports = productRoute;