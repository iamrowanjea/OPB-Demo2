/**
 * Created by r_macleod on 01/10/2014.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'penfax_rules',
    password:'penfax_rules',
    database:'xe',
    port:1521});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) {
    console.error('error connecting: ' + err.stack);
    return;
    }

    console.log('The solution is: ', rows[0].solution);
});

connection.end();

/*
var connection = mysql.createConnection('mysql://penfax_rules:penfax_rules@//localhost/xe');
connection.connect(function(err) {
    if (err) {
        connection = mysql.createConnection(connection.config);
        console.log('connected as id ' + connection.config);
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
*/

/*(DESCRIPTION =    (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))    (CONNECT_DATA =      (SERVER = DEDICATED)      (SERVICE_NAME = xe)    )  )*/

/*
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
});

connection.end();
*/

/*
var queryString = 'SELECT * FROM DUAL';

connection.query(queryString, function(err, rows, fields) {
        if(err) throw err;

        for (var i in rows) {
            console.log('Post Titles: ', rows[i].post_title);
        }

    });
connection.end();
*/
