const mysql = require('mysql2');

const config = require('./config/congig.json');

const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.port,
});

db.connect(error => {
    if(error) {
        console.log(error);
    } else {
        console.log('Database connected successful!');
    }
});

module.exports = db.promise();
