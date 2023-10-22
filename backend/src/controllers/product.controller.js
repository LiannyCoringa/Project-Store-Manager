const { productService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getProducts = async (_req, res) => {
  const { status, data } = await productService.getProduct();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.getProductById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await productService.insertProduct(name);
  return res.status(mapStatusHTTP(status)).json(data);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { status, data } = await productService.updateProduct(id, name);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getProducts,
  getProductsById,
  insertProduct,
  updateProduct,
};