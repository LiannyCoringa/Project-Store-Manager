const { productService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getProducts = async (_req, res) => {
  const { status, data } = await productService.getProduct();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getProductsById = async (_req, res) => {
  const { id } = _req.params;
  const { status, data } = await productService.getProductById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getProducts,
  getProductsById,
};