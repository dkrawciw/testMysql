var express = require('express'),
    app = express(),
    mysql = require('mysql');

var connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'admin',
  database: 'test'
});

app.listen(80, function(){
  console.log("app is up n' running");
});
