const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "1000184050Johan",
  host: "localhost",
  port: 5432,
  database: "taskdb",
});

module.exports = pool;
