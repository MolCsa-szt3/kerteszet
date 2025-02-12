import sqlite from "sqlite3";

const db = new sqlite.Database("plants");

async function initializeDB() {
  console.log("InitializeDB is WIP");
  return;
}

export { initializeDB };
