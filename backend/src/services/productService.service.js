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
  if (!name) {
    return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
  }
  if (name.length < 5) {
    return { status: 'INVALID_VALUE',
      data: { message: '"name" length must be at least 5 characters long' } };
  }
  const id = await productModel.insert(name);
  const product = await productModel.findById(id);
  return { status: 'CREATED', data: product };
};

const updateProduct = async (id, name) => {
  if (!name) {
    return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
  }
  if (name.length < 5) {
    return { status: 'INVALID_VALUE',
      data: { message: '"name" length must be at least 5 characters long' } };
  }
  const productExists = await productModel.findById(id);
  if (!productExists) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  await productModel.update(id, name);
  return { status: 'SUCCESSFUL', data: { id: Number(id), name } };
};

const deleteProduct = async (id) => {
  const productExists = await productModel.findById(id);
  if (!productExists) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  await productModel.deleteProducts(id);
  return { status: 'NO_CONTENT' };
};

module.exports = {
  getProduct,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};