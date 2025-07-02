const db = require("../configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("../utils/queryBuilder");

exports.findById = async (sid) => {
  const [row] = await db.query(`select * from sessions where sid = ?`, [sid]);
  return row.length ? row[0] : null;
};

exports.create = async (data) => {
  const { columns, placeholders, values } = buildInsertQuery(data);

  const query = `INSERT INTO sessions (${columns}) VALUES (${placeholders});`;

  const [{ insertId }] = await db.query(query, values);

  return {
    sid: insertId,
    ...data,
  };
};

exports.update = async (sid, data) => {
  const { setClause, values } = buildUpdateQuery(data);

  values.push(sid);

  const query = `UPDATE sessions SET ${setClause} WHERE sid = ?;`;
  await db.query(query, values);

  return {
    sid,
    ...data,
  };
};

exports.remove = async (sid) => {
  const [{ affectedRows }] = await db.query(
    `delete from sessions where id = ?`,
    [sid]
  );
  return affectedRows > 0;
};
