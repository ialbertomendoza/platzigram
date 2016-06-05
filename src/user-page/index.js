import page from 'page'
import header from '../header'
import title from 'title'
import empty from 'empty-element'
import template from './template'

page('/:username', header, loadUser, function (context, next){
	var main = document.getElementById('main-container');
	title(`Platigram - ${context.params.username}`);
	empty(main).appendChild(template(context.user));
})

async function loadUser (context, next) {
	try {
		context.user = await fetch(`/api/user/${context.params.username}`).then(res => res.json());
		next();
	} catch (error) {
		console.log(error);
	}
}