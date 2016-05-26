var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(context, next){
	title('Platzigram');
	var main = document.getElementById('main-container');

	var pictures = [
		{
			user: {
				username: 'mendoza',
				avatar: 'avatar.png'
			},
			createdAt: new Date,
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
	empty(main).appendChild(template(pictures));
});