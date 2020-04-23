var express = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    mysql = require('mysql');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'admin',
  database: 'test'
});

app.listen(80, function(){
  console.log("app is up n' running");
});
app.get('/', function(){
  var q = 'SELECT 1 + 1 AS solution';
  connection.query(q, function(err, results, fields){
    if(err){
      throw err;
    }
    console.log('The solution is: ' + results[0].solution);
  });
  res.render('index.html');
});
