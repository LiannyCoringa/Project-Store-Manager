const { salesModel } = require('../models');

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
  itemsSold.map(async (item) => {
    await salesModel.insertSaleProduct(id, item.productId, item.quantity);
    return null;
  });
  return { status: 'CREATED', data: { id, itemsSold } };
};

module.exports = {
  getSales,
  getSalesById,
  insertSales,
};