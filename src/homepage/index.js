var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

page('/', header, asyncLoad, function(context, next){
	title('Platzigram');
	var main = document.getElementById('main-container');
	empty(main).appendChild(template(context.pictures));
})

/**
 * Método basado en superagent
 */
function loadPictures(context, next){
	request
		.get('/api/pictures')
		.end(function(error, res){
			if (error) return console.log(error);
			context.pictures = res.body;
			next();
		});
}

/**
 * Método basado en Axios a base de promesas
 */
function loadPicturesAxios(context, next){
	axios
		.get('/api/pictures')
		.then(function(res){
			context.pictures = res.data;
			next();
		})
		.catch(function(error){
			console.log(error);
		});
}

/**
 * Método basado en Fetch, funcionalidad nativa en 
 * algunos navegadores, también a base de promesas.
 */
function loadPicturesFetch(context, next){
	fetch('/api/pictures')
		.then(function (res) {
			return res.json();
		})
		.then(function (pictures){
			context.pictures = pictures;
			next();
		})
		.catch(function(error){
			console.log(error);
		});
}

async function asyncLoad (context, next){
	try {
		context.pictures = await fetch('/api/pictures').then(res => res.json());
		next();
	} catch (error) {
		return console.log(error);
	}
}









