const { Pool } = require('pg')


let conn;
if (!conn) {
  conn = new Pool({
    user: "nntu079",
    password: "TKLoYvBh39xH",
    host: "ep-twilight-violet-887854.ap-southeast-1.aws.neon.tech",
    port: 5432,
    database: "neondb",
    ssl: true,
  });
}

module.exports = conn;

