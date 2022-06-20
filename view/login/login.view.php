<?php 
	$title = 'Login';
	if (Sesion::validar_sesion()){
		Redireccion::redirigir("home");
	}
?>
 <div class="container py-4">
	<div class="row justify-content-around text-center">
		<div class="col-md-4 py-2 rounded bg-light border shadow">
			<h1 class="mt-3 text-uppercase">Login</h1>
			<hr class="bg-primary">
			<img class="mb-2" src="<?=DEP_IMG?>favicon.png" width="250px" height="250px">
			<form id="frm_login" class="form-grup mb-3 ml-3 mr-3">
				<div class="input-group mb-2">
					<span class="input-group-text borde-left"><i class="fas fa-user-alt"></i></span>
					<input type="text" class="form-control input borde-right" name="usuario" placeholder="Usuario">
				</div>
				<div class="input-group mb-3">
					<span class="input-group-text borde-left"><i class="fas fa-lock"></i></span>
					<input type="password" class="form-control input borde-right" name="password" placeholder="Contraseña">
				</div>
				 
				<div class="py-1">
					<button type="submit" class="btn btn-blue btn-block mb-2" id="btnSesion">Iniciar Sesion</button>
					<a href="#" class="btn btn-blue btn-block mb-2">Registrarse</a>
				</div>
			</form>
		</div>
	</div>
</div>
<script src="<?=CONTROLLER?>login.controller.js"></script>

<script>
	/* var objeto = [
		{
			nombre: 'HTML',
			duracion: 15,
			estado: true
		},
		{
			nombre: 'JAVA',
			duracion: 15,
			estado: false
		}
	];

	for(let indice of objeto){
		console.log(indice.nombre);
	} */

	/* const prueba = () => {

		fetch('model/texto.txt')
		.then(data => data.text())
		.then(data => {
			$('#contenido').html(`${data}`);			
		});
	} */

	/* const prueba = () => {
		opening();
		fetch('https://randomuser.me/api/')
		.then(data => data.json())
		.then(data => {
			ending();
			$('#contenido').html(`
				<img src="${data.results[0].picture.large}" class="img-fluid border rounded-circle mx-auto d-block" alt="">
				<p>Nombre: ${data.results[0].name.last} </p>
				`);			
		});
	} */


	/* const prueba = () => {
		opening();
		fetch('model/tabla.json')
			.then(data => data.json())
			.then(data => {
				tabla(data);
				ending();
			});
	}


	const tabla = (datos) => {
		contenido = ``;
		for (let indice of datos) {
			contenido += `
			<tr>
				<th scope="row">${indice.id}</th>
				<td>${indice.nombre}</td>
				<td>${indice.email}</td>
				<td>${indice.estado ? "Activo" : "Inactivo"}</td>
			</tr>
			`;			
		}
		$('#contenido').html(contenido);
	} */

</script>