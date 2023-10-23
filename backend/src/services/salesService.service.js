const { salesModel, productModel } = require('../models');

const getSales = async () => {
  const sales = await salesModel.findModel();
  return { status: 'SUCCESSFUL', data: sales };
};
const getSalesById = async (id) => {
  const sale = await salesModel.findIdModel(id);
  if (sale.length === 0) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  return { status: 'SUCCESSFUL', data: sale };
};

const insertSales = async (itemsSold) => {
  const id = await salesModel.insertSale();
  itemsSold.forEach(async ({ productId }) => {
    const insertId = await productModel.findById(productId);
    if (insertId.length === 0) {
      return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
    }
  });

  await itemsSold.map(async ({ productId, quantity }) =>
    salesModel.insertSaleProduct(id, productId, quantity));
  // await Promise.all(data);
  return { status: 'CREATED', data: { id, itemsSold } };
};

module.exports = {
  getSales,
  getSalesById,
  insertSales,
};