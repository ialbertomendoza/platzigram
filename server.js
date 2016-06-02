var express = require("express");
var multer = require("multer");
var ext = require("file-extension");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname));
  }
})
 
var upload = multer({ storage: storage }).single('picture');

var app = express();

/** Motor de vistas */
app.set('view engine', 'pug');

/** Recursos estáticos */
app.use(express.static('public'));

/** Rutas */
app.get('/', function (req, res){
	res.render('index');
});
app.get('/signup', function (req, res){
	res.render('index');
});
app.get('/signin', function (req, res){
	res.render('index');
});

app.get('/api/pictures', function(req, res, next){
	var pictures = [
		{
			user: {
				username: 'mendoza',
				avatar: 'avatar.png'
			},
			createdAt: new Date().getTime(),
			url: 'office.jpg',
			likes: 69,
			liked: false
		},
		{
			user: {
				username: 'mendoza',
				avatar: 'avatar.png'
			},
			createdAt: new Date().setDate(new Date().getDate() - 10),
			url: 'office.jpg',
			likes: 96,
			liked: true
		},
	];

	setTimeout(function(){
		res.send(pictures);
	}, 2000);
});

app.post('/api/pictures', function(req, res){
	upload(req, res, function(error){
		if (error) {
			return res.send(500, "Error!");
		}
		res.send("File uploaded!");
	})
});

app.listen(8080, function(error){
	if (error) return console.log("Error"), process.exit(1);
	console.log("App started");
})