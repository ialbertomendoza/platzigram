var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');

var main = document.getElementById('main-container');

page('/', function(context, next){
	main.innerHTML = '<a href="/signup">Signup</a>';
});

page('/signup', function(context, next){
	var el = yo `<div class="container">
			<div class="row">
				<div class="col s10 push-s1">
					<div class="row">
						<div class="col m5 hide-on-small-only">
							<img class="iphone" src="./iphone.png" alt="">
						</div>
						<div class="col s12 m7">
							<div class="row">
								<div class="signup-box">
									<h1 class="platzigram">Platzigram</h1>
									<form class="signup-form">
										<h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
										<div class="section">
											<a class="btn btn-fb hide-on-small-only">Iniciar sesi&oacute;n con Facebook</a>
											<a class="btn btn-fb hide-on-med-and-up">Iniciar sesi&oacute;n</a>
										</div>
										<div class="divider"></div>
										<div class="section">
											<input type="email" name="email" placeholder="Correo el&eacute;ctronico" />
											<input type="text" name="name" placeholder="Nombre completo" />
											<input type="text" name="username" placeholder="Nombre de usuario" />
											<input type="password" name="password" placeholder="Contrase&ntilde;a" />
											<button class="btn waves-effect waves-light btn-signup" type="submit">Reg&iacute;strate</button>
										</div>
									</form>	
								</div>
							</div>
							<div class="row">
								<div class="login-box">
									¿Tienes una cuenta? <a href="/signin">Entrar</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
	empty(main).appendChild(el);
});

page(); // o page.start();