/**
 * Created by hyochan on 2015-02-19.
 */
var mysql = require('mysql');

var pool = mysql.createConnection({
    host : '127.0.0.1',
    // socketPath : '/opt/local/var/run/mysql56/mysqld.sock', // for mac-mini
    user : 'root',
    port : '3306',
    password : 'your_password',
    database : 'gagetalk'
});

module.exports = pool;