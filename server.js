var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
var database = { };
var mysql = require('mysql');
var connection = new mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'temp'
  
});
connection.connect(function(err){
	if(err){
		console.log("connection failed..!!");
		console.log(err);
	}else console.log("connection successfull");
});
app.get('/contactlist',function(req,res){
	console.log("RECIVED get req")
	connection.query("select * from commant",function(error,rows){
		if(!error){
			res.json(rows);
		}
	})
});
// app.get('/contactlist',function(req,res){
// 	console.log("RECIVED")
// 	connection.query("select * from login",function(error,rows){
// 		if(!error){
// 			res.json(rows);
// 		}
// 	})
// });
app.post('/contactlist',function(req,res){
	console.log(req);
	connection.query('INSERT INTO commant SET ?', req.body, function (err, result) {
			console.log('ADDED');
	});
	
});
app.listen(3000);
console.log("server running on 3000");