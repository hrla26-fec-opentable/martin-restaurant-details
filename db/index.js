const mysql = require('mysql-promise');
const config = require('./db.config');

const db = mysql();

db.configure(config);

module.exports = db;
