"use strict";

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

const databaseUri = getDatabaseUri();

const db = new Client({
  connectionString: databaseUri,
});

async function connectDb() {
  const { log, error } = require("console");
  try {
    await db.connect();
    log(`Connected to ${databaseUri}`);
  } catch(err) /* istanbul ignore next (ignore for coverage) */ {
    error(`Couldn't connect to ${databaseUri}`, err.message);
    process.exit(1);
  }
}
connectDb();

module.exports = db;
