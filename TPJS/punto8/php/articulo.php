<?php 

include_once ('conexion.php');

class Articulo{

	private static $conexion;

	public static function conectar(){
		self::$conexion = Conexion::conectar();
	}

	public static function desconectar(){
		self::$conexion = null;
	}
	

	public static function agregarArticulo($titulo, $fecha, $comentario){
		$query = "INSERT INTO articulo(titulo, fecha, comentario) VALUES (:titulo, :fecha, :comentario);";
		self::conectar();
		$resultado = self::$conexion->prepare($query);

		$resultado->bindParam(":titulo", $titulo);
		$resultado->bindParam(":fecha", $fecha);
		$resultado->bindParam(":comentario", $comentario);

		
		 if ($resultado->execute()){
		 	self::desconectar();
		 	return true;
		 } 
		 	self::desconectar();
		 	return false; /*me devuelve el codigo de error de la ultima transaccion. puede ocurrir que se ingrese 								dos articulos con el mismo titulo, lo cual no esta permitido*/
		
		
		
	}

	public static function buscarArticulos(){
		$query = "SELECT * FROM articulo";
		self::conectar();
		$resultado = self::$conexion->prepare($query);
		$resultado->execute();
		if($resultado->rowCount() > 0){
			$result = $resultado->fetchAll(PDO::FETCH_ASSOC);
			self::desconectar();
			return $result;
		}
		self::desconectar();
		return false;
	}
}
 ?>