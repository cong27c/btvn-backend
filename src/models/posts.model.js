const db = require("../configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("../utils/queryBuilder");

exports.getPaginatedPosts = async (limit, offset) => {
  const [posts] = await db.query(`SELECT * FROM posts LIMIT ? OFFSET ?`, [
    Number(limit),
    Number(offset),
  ]);
  return posts;
};

exports.findAll = async () => {
  const [posts] = await db.query("select * from posts");
  return posts;
};

exports.findById = async (id) => {
  const [post] = await db.query(`select * from posts where id = ?`, [id]);
  return post.length ? post[0] : null;
};

exports.create = async (data) => {
  const { columns, placeholders, values } = buildInsertQuery(data);

  const query = `INSERT INTO posts (${columns}) VALUES (${placeholders});`;

  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};

exports.update = async (id, data) => {
  const { setClause, values } = buildUpdateQuery(data);

  values.push(id);
  const query = `UPDATE posts SET ${setClause} WHERE id = ?;`;
  await db.query(query, values);

  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const [{ affectedRows }] = await db.query(`delete from posts where id = ?`, [
    id,
  ]);
  return affectedRows > 0;
};
