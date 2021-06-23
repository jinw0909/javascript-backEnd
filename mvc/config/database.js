const settings = require('./settings');
const mysql = require('mysql');
const connection = mysql.createConnection(settings.connect);

connection.connect(function(err) {
    if (err) {
        console.log("연결실패 : ", err);
        return;
    }
    console.log("db연결성공!!");
});

module.exports = connection;