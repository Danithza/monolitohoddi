const sql = require("mssql");

const config = {
    user: "sa",
    password: "123456",
    server: "localhost",
    database: "Hoddi",
    port: 14331,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const pool = new sql.ConnectionPool(config);

module.exports = pool;