<?php 
	include_once "controlador.php";

	if($_GET["do"] == "guardar"){
		$resultado = ArticuloControlador::agregarArticulo($_GET["titulo"], $_GET["fecha"], $_GET["comentario"]);
		if( $resultado === true){
			echo '{"status": "ok", "descripcion": "Articulo Guardado"}';
		} else {
			if ($resultado = '23505'){
				echo '{"status" : "not ok", "descripcion": "El nombre del artículo ya existe, ingrese otro por favor."}';
			}
		} 
	}else {
			$respuesta = array('status' => 'ok', 'data': => ArticuloControlador::buscarArticulos());
			echo json_encode($respuesta);
		};