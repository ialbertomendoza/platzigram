var page = require('page');

var main = document.getElementById('main-container');

page('/', function(context, next){
	main.innerHTML = 'Home <a href="/signup">Signup</a>';
});
page('/signup', function(context, next){
	main.innerHTML = 'Signup <a href="/">Home</a>';
});

page(); // o page.start();