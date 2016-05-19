var express = require("express");
var app = express();

/** Motor de vistas */
app.set('view engine', 'pug');

/** Recursos estáticos */
app.use(express.static('public'));

/** Rutas */
app.get('/', function (req, res){
	res.render('index');
})

app.listen(8080, function(error){
	if (error) return console.log("Error"), process.exit(1);
	console.log("App started");
})