var express = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    mysql = require('mysql');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var connection = mysql.createConnection({
  host    : '127.0.0.1',
  user    : 'root',
  password: 'password',
  database: 'test',
  port    : '3306'
});

app.listen(80, function(){
  console.log("app is up n' running");
});
app.get('/', function(req, res){
  var q = 'SELECT id, CONCAT(DAY(time_check),"/",MONTH(time_check),"/",YEAR(time_check)," @ ",HOUR(time_check),":",MINUTE(time_check)) AS "time_check" FROM checks;';
  connection.query(q, function(err, results, fields){
    if(err){
      throw err;
    }
    res.render('index.ejs', {results: results});
  });
});

app.post('/', function(req, res){
  connection.query('INSERT INTO checks() VALUES ();');
  res.redirect('/');
});
