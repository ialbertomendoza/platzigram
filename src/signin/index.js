var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/signin', function(context, next){
	title('Platzigram - Signin');
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
});