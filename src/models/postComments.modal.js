const db = require("../configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("../utils/queryBuilder");

exports.findAll = async (postId) => {
  const [comments] = await db.query(
    "SELECT * FROM comments WHERE post_id = ?",
    [postId]
  );
  return comments;
};

exports.findById = async (postId, commentId) => {
  const [post] = await db.query(
    `SELECT * FROM comments WHERE post_id = ? AND id = ?`,
    [postId, commentId]
  );
  return post.length ? post[0] : null;
};

exports.create = async (postId, data) => {
  const insertData = { ...data, post_id: postId };

  const { columns, placeholders, values } = buildInsertQuery(insertData);

  const query = `INSERT INTO comments (${columns}) VALUES (${placeholders});`;

  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};
