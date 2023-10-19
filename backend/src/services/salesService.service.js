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

module.exports = {
  getSales,
  getSalesById,
};