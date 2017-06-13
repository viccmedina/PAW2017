$(document).ready(function(){    /*cuando el documento este cargado*/
	$("input[name='nuevo_articulo']").click(agregarArticulo);  /* buscara el elemento cuyo id sea el indicado y ejecutará la funcion "agregarArticulo"*/
	/*$("#elimiar_articulo").click(eliminarArticulo);
	$("#listar_articulo").click(litarArtuculo);*/
});


function agregarArticulo(){
	var titulo = $("[name = 'titulo']").val(),
		fecha = $("[name = 'fecha_publicacion']").val(),
		comentario = $("[name = 'comentario']").val();
		guardarEnBD(titulo, fecha, comentario);
}


/*este será la funcion para linkear con el php*/

function guardarEnBD(titulo, fecha, comentario){
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
		datos = JSON.parse(datos);
		console.log(datos);
		if(datos.status !== "ok"){ /*evaluamos la respuesta del servidor*/
			alert("Error al guardar en la BD ! :|");
		}
	}).fail(function (datos){ /*si no hubo respuesta del servidor quiere decir que la conexion no fue exitosa*/
		console.log(datos);
		console.info("Fallo la conxión - Error 404");
	});
}