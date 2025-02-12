import sqlite from "sqlite3";

const db = new sqlite.Database("plants.sqlite");

async function initializeDB() {
  console.log("InitializeDB is WIP");

  await dbRun("DROP TABLE IF EXISTS plants");
  await dbRun(
    "CREATE TABLE plants (name STRING, perennial BOOLEAN, category STRING, price INTEGER)"
  );
  await dbRun(
    'INSERT INTO plants (name, perennial, category, price) VALUES ("Hóvirág", TRUE, "virág", 530)'
  );
  await dbRun(
    'INSERT INTO plants (name, perennial, category, price) VALUES ("Barackfa", TRUE, "fa", 1530)'
  );
  await dbRun(
    'INSERT INTO plants (name, perennial, category, price) VALUES ("Muskátli", FALSE, "virág", 420)'
  );
  await dbRun(
    'INSERT INTO plants (name, perennial, category, price) VALUES ("Borostyán", TRUE, "bokor", 690)'
  );
  //thanks Prettier for making these look stupid
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
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}
export { initializeDB, dbAll, dbGet, dbRun };
