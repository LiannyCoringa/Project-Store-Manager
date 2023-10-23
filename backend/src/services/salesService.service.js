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
  const data = itemsSold.map(async ({ productId }) => {
    const insertId = await productModel.findById(productId);
    if (!insertId) {
      return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
    }
    return false;
  });

  const dataResult = await Promise.all(data);
  if (dataResult.find((item) => !(!item))) return dataResult.find((item) => !(!item));

  const id = await salesModel.insertSale();
  await itemsSold.map(async ({ productId, quantity }) =>
    salesModel.insertSaleProduct(id, productId, quantity));
  return { status: 'CREATED', data: { id, itemsSold } };
};

const deleteSale = async (id) => {
  const sale = await salesModel.findByIdSales(id);
  if (sale.length === 0) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  await salesModel.deleteSale(id);
  return { status: 'NO_CONTENT' };
};

module.exports = {
  getSales,
  getSalesById,
  insertSales,
  deleteSale,
};