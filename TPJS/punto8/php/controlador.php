<?php 

include_once 'articulo.php';


class ArticuloControlador{
	
	public static function agregarArticulo($titulo, $fecha, $comentario){
		return Articulo::agregarArticulo($titulo, $fecha, $comentario);
	}

	public static function buscarArticulos(){
		return Articulo::buscarArticulo();
	}
}
 ?>