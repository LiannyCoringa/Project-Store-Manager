const { productModel } = require('../models');

const getProduct = async () => {
  const products = await productModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
};

const getProductById = async (id) => {
  const product = await productModel.findById(id);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: product };
};

module.exports = {
  getProduct,
  getProductById,
};