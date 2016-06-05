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
	res.send(pictures);
});

app.post('/api/pictures', function(req, res){
	upload(req, res, function(error){
		if (error) {
			return res.send(500, "Error!");
		}
		res.send("File uploaded!");
	})
});

app.get('/api/user/:username', function(req, res){
	const user = {
		username: 'mendoza',
		avatar: 'https://scontent-mia1-1.cdninstagram.com/t51.2885-19/s150x150/11910343_1049202415090281_1290918267_a.jpg',
		pictures: [
			{
				id: 1,
				src: 'https://scontent-mia1-1.cdninstagram.com/t51.2885-15/e35/13267505_581794531990060_217345862_n.jpg',
				likes: 3,
			},
			{
				id: 2,
				src: 'https://scontent-mia1-1.cdninstagram.com/t51.2885-15/e35/13258911_1006790912769821_582096289_n.jpg',
				likes: 33,
			},
			{
				id: 3,
				src: 'https://scontent-mia1-1.cdninstagram.com/t51.2885-15/e35/13381065_1581105155520388_514660483_n.jpg',
				likes: 2,
			},
			{
				id: 4,
				src: 'https://scontent-mia1-1.cdninstagram.com/t51.2885-15/e35/13398615_229536484098024_1144859186_n.jpg',
				likes: 12,
			},
			{
				id: 5,
				src: 'https://scontent-mia1-1.cdninstagram.com/t51.2885-15/e35/13298226_686484398156512_1664475112_n.jpg',
				likes: 1,
			},
			{
				id: 6,
				src: 'https://scontent-mia1-1.cdninstagram.com/t51.2885-15/e35/13398512_904605442983324_57038277_n.jpg',
				likes: 16,
			},
		]
	}
	res.send(user);
});

app.get('/:username', function(req, res){
	res.render('index', {title: `Platzigram - ${req.params.username}`});
});

app.listen(8080, function(error){
	if (error) return console.log("Error"), process.exit(1);
	console.log("App started");
})