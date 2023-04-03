const { Pool } = require('pg')


let conn;
if (!conn) {
  conn = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    database: "vrp",
  });
}

module.exports = conn;

