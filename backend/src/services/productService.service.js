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

const insertProduct = async (name) => {
  const id = await productModel.insert(name);
  const product = await getProductById(id);
  return { status: 'CREATED', data: product.data };
};

module.exports = {
  getProduct,
  getProductById,
  insertProduct,
};