const connection = require('./connection');

const findModel = async () => {
  const [sales] = await connection.execute(`SELECT
  sp.sale_id AS saleId, s.date AS date, sp.product_id AS productId, sp.quantity AS quantity
  FROM sales_products AS sp
  INNER JOIN sales AS s
  ON s.id = sp.sale_id
  ORDER BY sp.sale_id ASC, sp.product_id ASC;`);
  return sales;
};
const findIdModel = async (id) => {
  const [sales] = await connection.execute(`SELECT
  s.date AS date, sp.product_id AS productId, sp.quantity AS quantity
  FROM sales AS s
  INNER JOIN sales_products AS sp
  ON s.id = sp.sale_id
  WHERE s.id = ?
  ORDER BY sp.product_id ASC;`, [id]);
  return sales;
};

const insertSale = async () => {
  const [sales] = await connection.execute('INSERT INTO sales VALUES ()');
  const { insertId } = sales;
  return insertId;
};

const insertSaleProduct = async (saleId, productId, quantity) => {
  const [sales] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  const { insertId } = sales;
  return insertId;
};

module.exports = {
  findModel,
  findIdModel,
  insertSale,
  insertSaleProduct,
};