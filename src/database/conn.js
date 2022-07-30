const { Pool } = require("pg");

require("dotenv").config();

const connectionString = process.env.POSTGRES_URL;
const pool = new Pool({
    connectionString,
});

pool.connect((err) => {
    if (err) {
        console.log("error: " + err);
    }
    console.log("Connected to PostgresSQL");
});

module.exports = pool;
