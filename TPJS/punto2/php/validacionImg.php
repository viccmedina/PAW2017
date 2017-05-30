<?php 
	/**
	* 
	*/
	class validacionImg
	{

		$ruta = "";

		#constructor, pide la ruta en donde se almacenaran las imagenes
		function __contruct($ruta){
			$this->ruta = $ruta;
		}

		#valido el formato aceptado
		function validarFormato($formato){
			if($formato == 'jpg'){
				return true;
			} else {
				return false;
			}
		}

		#valido el tamaño aceptado
		function validarTamano($tamano){
			if(($tamano > 0) && ($tamano <= 5242880)){
				return true;
			} else {
				return false;
			}
		}

		function subirImg($imagen){
			move_uploaded_file($imagen, $this->ruta . $imagen);

		}
	}

 ?>