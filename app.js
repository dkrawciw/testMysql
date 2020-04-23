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

});
