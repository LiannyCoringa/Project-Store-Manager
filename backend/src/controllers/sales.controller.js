const { salesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getSales = async (_req, res) => {
  const { status, data } = await salesService.getSales();
  return res.status(mapStatusHTTP(status)).json(data);
};
const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesService.getSalesById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const insertSales = async (req, res) => {
  const itemsSold = req.body;
  const { status, data } = await salesService.insertSales(itemsSold);
  return res.status(mapStatusHTTP(status)).json(data);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesService.deleteSale(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getSales,
  getSalesById,
  insertSales,
  deleteSale,
};