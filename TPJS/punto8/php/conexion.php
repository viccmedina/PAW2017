<?php 
	class Conexion{
		
		private static $conexion;

		public static function conectar(){
			try{
				
				$conexion = new PDO("pgsql:dbname=blog; host=localhost; port=5433; user=lucria; password=mufina");
				return $conexion;
			} catch(PDOException $ex){
				echo "<h1 class=''error>Error en la Conexion </h1>";
				print_r($ex);
			}
		}
	}
 ?>