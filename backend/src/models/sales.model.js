const camelize = require('camelize');
const connection = require('./connection');

const findModel = async () => {
  const [sales] = await connection.execute(`SELECT
  sp.sale_id, s.date, sp.product_id, sp.quantity
  FROM sales_products AS sp
  INNER JOIN sales AS s
  ON s.id = sp.sale_id
  ORDER BY sp.sale_id ASC, sp.product_id ASC;`);
  return camelize(sales);
};
const findIdModel = async (id) => {
  const [sales] = await connection.execute(`SELECT
  s.date, sp.product_id, sp.quantity
  FROM sales AS s
  INNER JOIN sales_products AS sp
  ON s.id = sp.sale_id
  WHERE s.id = ?
  ORDER BY sp.product_id ASC;`, [id]);
  return camelize(sales);
};

module.exports = {
  findModel,
  findIdModel,
};