const connection = require('./connection');

const findAll = async () => {
  const [product] = await connection.execute('SELECT * FROM products ORDER BY id');
  return product;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return product;
};

module.exports = {
  findById,
  findAll,
};