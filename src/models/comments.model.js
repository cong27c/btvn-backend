const db = require("../configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("../utils/queryBuilder");

exports.findAll = async () => {
  const [comments] = await db.query("select * from comments");
  return comments;
};

exports.findById = async (id) => {
  const [comment] = await db.query(`select * from comments where id = ?`, [id]);

  return comment.length ? comment[0] : null;
};

exports.create = async (data) => {
  const { columns, placeholders, values } = buildInsertQuery(data);

  const query = `INSERT INTO comments (${columns}) VALUES (${placeholders});`;

  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};

exports.update = async (id, data) => {
  const { setClause, values } = buildUpdateQuery(data);

  values.push(id);

  const query = `UPDATE comments SET ${setClause} WHERE id = ?;`;
  await db.query(query, values);
  // console.log(query, values);
  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const [{ affectedRows }] = await db.query(
    `delete from comments where id = ?`,
    [id]
  );
  return affectedRows > 0;
};
