const db = require("../configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("../utils/queryBuilder");

exports.findAll = async () => {
  const [products] = await db.query("select * from products");
  return products;
};

exports.findById = async (id) => {
  const [product] = await db.query(`select * from products where id = ?`, [id]);
  return product.length ? product[0] : null;
};

exports.create = async (data) => {
  const { columns, placeholders, values } = buildInsertQuery(data);

  const query = `INSERT INTO products (${columns}) VALUES (${placeholders});`;

  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};

exports.update = async (id, data) => {
  const { setClause, values } = buildUpdateQuery(data);

  values.push(id);

  const query = `UPDATE products SET ${setClause} WHERE id = ?;`;
  await db.query(query, values);

  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const [{ affectedRows }] = await db.query(
    `delete from products where id = ?`,
    [id]
  );
  return affectedRows > 0;
};
