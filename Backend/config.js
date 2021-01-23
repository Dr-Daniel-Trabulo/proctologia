const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: eu-cdbr-west-03.cleardb.net,
    user: b67976ff70d22e,
    password: e31f994e,
    database: heroku_2d061ca73412920,
});

module.exports = connection;

// host: process.env.DB_HOST,
// user: process.env.DB_USER,
// password: process.env.DB_PASS,
// database: process.env.DB_NAME,