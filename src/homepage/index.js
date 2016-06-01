var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');

page('/', header, loadPictures, function(context, next){
	title('Platzigram');
	var main = document.getElementById('main-container');
	empty(main).appendChild(template(context.pictures));
})

function loadPictures(context, next){
	request
		.get('/api/pictures')
		.end(function(error, res){
			if (error) return console.log(error);
			context.pictures = res.body;
			next();
		});
}