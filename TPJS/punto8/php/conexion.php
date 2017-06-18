<?php 
	class Conexion{
		
		private static $conexion;

		public static function conectar(){
			try{
				#$conexion = new PDO("mysql:dbname=todo; host=localhost;","root", "victoria");
				$conexion = new PDO("mysql:dbname=blog;host=localhost;","root", "victoria");
				#$conexion = new PDO("pgsql:dbname=blog; host=127.0.0.1; port=5432; user=lucria; password=mufina");
				return $conexion;
			} catch(PDOException $ex){
				echo "<h1 class=''error>Error en la Conexion </h1>";
				print_r($ex);
			}
		}
	}
 ?>