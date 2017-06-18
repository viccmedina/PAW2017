$(document).ready(function(){    /*cuando el documento este cargado*/
	$("input[name='nuevo_articulo']").click(agregarArticulo);  /* buscara el elemento cuyo id sea el indicado y ejecutará la funcion "agregarArticulo"*/
	/*$("#elimiar_articulo").click(eliminarArticulo);*/
	$("#listar_articulo").click(listarArticulo);
});

function listarArticulo(){
	$.ajax({
		url: "../php/interfaz.php",
		method: "get",
		data:{
			"do" : "listar_articulos"
		}
	}).done(function (datos){
		datos = JSON.parse(datos);
		if(datos.status !== "ok"){
			alert(datos.descripcion);
		} else {
			mostrarArticulos(datos.data);
		}
	}).fail(function (datos){
		console.info("Error..!");
	});
}

function mostrarArticulos(arreglo){
	var body = document.getElementsByTagName("body");
	for(var i = 0; i < arreglo.size(); i++){
		var contenedor = document.createElement("div");
		contenedor.setAttribute("class", "contenedor_articulo");
		
		var p_titulo = document.createElement("p");
		var titulo = document.createTextNode(arreglo[i].getTitulo());
		p_titulo.appendChild(titulo);
		contenedor.appendChild(p_titulo);

		var p_fecha = document.createElement("p");
		var fecha = document.createTextNode(arreglo[i].getFecha());
		p_fecha.appendChild(fecha);
		contenedor.appendChild(p_fecha);

		var p_comentario = document.createElement("p");
		var comentario = document.createTextNode(arreglo[i].getComentario());
		p_comentario.appendChild(comentario);
		contenedor.appendChild(p_comentario);

		body.appendChild(contenedor);
	}
}

function agregarArticulo(){
	var titulo = $("[name = 'titulo']").val(),
		fecha = $("[name = 'fecha_publicacion']").val(),
		comentario = $("[name = 'comentario']").val();
		guardarEnBD(titulo, fecha, comentario);
}


/*este será la funcion para linkear con el php*/

function guardarEnBD(titulo, fecha, comentario){
	console.log("pasa");
	$.ajax({
		url: "../php/interfaz.php",
		method: "get",
		data:{
			"do" : "guardar", /*va a llamar a la funcion con ese nombre a traves del metodo get*/
			"titulo" : titulo,
			"fecha" : fecha,
			"comentario" : comentario
		}
	}).done(function (datos){  /*si hubo respuesta del servidor*/
		console.log(datos);
		datos = JSON.parse(datos);

		if(datos.status !== "ok"){ /*evaluamos la respuesta del servidor*/
			alert(datos.descripcion);
		}
	}).fail(function (datos){ /*si no hubo respuesta del servidor quiere decir que la conexion no fue exitosa*/
		console.info("Fallo la conxión - Error 404");
	});
}