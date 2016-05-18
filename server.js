var express = require("express");
var app = express();

app.get('/', function (req, res){
	res.send('¡Hola mundo!');
});

app.listen(8080, function(error){
	if (error) return console.log("Error"), process.exit(1);
	console.log("App started");
});