import sqlite from "sqlite3";

const db = new sqlite.Database("plants.sqlite");

async function initializeDB() {
  console.log("InitializeDB is WIP");

  dbRun("DROP TABLE IF EXISTS plants");
  dbRun(
    "CREATE TABLE IF NOT EXISTS plants (name STRING, perennial BOOLEAN, category STRING, price INTEGER)"
  );

  return;
}

async function dbRun(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err) => {
      if (err) reject(err);
      else resolve(this);
    });
  });
}
async function dbGet(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}
async function dbAll(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.All(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}
export { initializeDB };
