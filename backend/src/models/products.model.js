const connection = require('./connection');

const findAll = async () => {
  const [product] = await connection.execute('SELECT * FROM products ORDER BY id');
  return product;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return product;
};

const insert = async (name) => {
  const [product] = await connection.execute('INSERT INTO products (name) VALUES (?)', [name]);
  const { insertId } = product;
  return insertId;
};

module.exports = {
  findById,
  findAll,
  insert,
};