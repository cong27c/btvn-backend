const DB_FILE = "./db.json";
const fs = require("fs").promises;

async function readDb(resource) {
  try {
    const jsonDb = await fs.readFile(DB_FILE, "utf-8");
    return JSON.parse(jsonDb)[resource] ?? [];
  } catch (error) {
    return [];
  }
}
async function writeDb(resource, data) {
  let db = {};
  try {
    const jsonDb = await fs.readFile(DB_FILE, "utf-8");
    db = JSON.parse(jsonDb);
  } catch (error) {}

  db[resource] = data;
  await fs.writeFile(DB_FILE, JSON.stringify(db, null, 2));
}

module.exports = {
  writeDb,
  readDb,
};
