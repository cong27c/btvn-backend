const db = require("../configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("../utils/queryBuilder");

exports.findAll = async () => {
  const [users] = await db.query(
    "SELECT * FROM users ORDER BY created_at DESC;"
  );
  return users;
};

exports.findById = async (id) => {
  const [user] = await db.query(`select * from users where id = ?`, [id]);
  return user.length ? user[0] : null;
};

exports.create = async (data) => {
  const { columns, placeholders, values } = buildInsertQuery(data);

  const query = `INSERT INTO users (${columns}) VALUES (${placeholders});`;

  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};

exports.update = async (id, data) => {
  const { setClause, values } = buildUpdateQuery(data);

  values.push(id);

  const query = `UPDATE users SET ${setClause} WHERE id = ?;`;
  await db.query(query, values);

  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const [{ affectedRows }] = await db.query(`delete from users where id = ?`, [
    id,
  ]);
  return affectedRows > 0;
};

exports.findByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0] || null;
};

exports.create = async ({ email, password }) => {
  const [result] = await db.query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, password]
  );
  return { id: result.insertId, email };
};
