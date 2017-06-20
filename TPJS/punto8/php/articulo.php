<?php 

include_once ('conexion.php');

class Articulo{

	protected $titulo;
	protected $fecha,
	protected $comentario;

	public function __construct($titulo, $fecha, $comentario){
		$this->titulo = $titulo;
		$this->fecha = $fecha;
		$this->comentario = $comentario;
	}

	public function getTitulo(){
		return $this->titulo;
	}

	public function getFecha(){
		return $this->fecha;
	}

	public function getComentario(){
		return $this->comentario;
	}
	
	private static $conexion;

	public static function conectar(){
		self::$conexion = Conexion::conectar();
	}

	public static function desconectar(){
		self::$conexion = null;
	}
	

	public static function agregarArticulo($titulo, $fecha, $comentario){
		#echo "estoy en agregar articulo desde articulo.php";
		$query = "INSERT INTO articulo(titulo, fecha, comentario) VALUES (:titulo, :fecha, :comentario);";
		self::conectar();
		$resultado = self::$conexion->prepare($query);

		$resultado->bindParam(":titulo", $titulo);
		$resultado->bindParam(":fecha", $fecha);
		$resultado->bindParam(":comentario", $comentario);
		self::desconectar();
		
		 if ($resultado->execute()){
		 	return true;
		 } else {
		 	return $resultado->errorCode();
		 }
		 	self::desconectar();
		 	return false; /*me devuelve el codigo de error de la ultima transaccion. puede ocurrir que se ingrese 								dos articulos con el mismo titulo, lo cual no esta permitido*/
		
		
		
	}

	public static function buscarArticulos(){
		$query = "SELECT * FROM articulo";
		self::conectar();
		$resultado = self::$conexion->prepare($query);
		//$resultado->execute();
		if($resultado->execute()){
			$result = $resultado->fetchAll(PDO::FETCH_ASSOC);
			self::desconectar();
			echo $result;
			return $result;
		}
		echo $result;
		self::desconectar();
		return false;
	}
}
 ?>