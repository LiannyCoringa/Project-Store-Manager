const productRoute = require('express').Router();
const { productController } = require('../controllers');

productRoute.get('/', productController.getProducts);
productRoute.post('/', productController.insertProduct);
productRoute.get('/:id/', productController.getProductsById);
productRoute.put('/:id/', productController.updateProduct);

module.exports = productRoute;