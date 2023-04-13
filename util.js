const { Pool } = require('pg')

const connectionString = "postgres://nntu079@ep-twilight-violet-887854.ap-southeast-1.aws.neon.tech/neondb"

let conn;
if (!conn) {
  conn = new Pool({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
  });
}

module.exports = conn;

