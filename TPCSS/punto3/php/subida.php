<?php
include_once 'redimensionador.php';

if (isset($_POST["btnSubir"])){
		$fileName = $_FILES["imagenSubida"]["name"];
		$fileType = $_FILES["imagenSubida"]["type"];
		$tmpName = $_FILES["imagenSubida"]["tmp_name"];
		$fileSize = $_FILES ["imagenSubida"]["size"];
	
		$miImagen = $_FILES["imagenSubida"];
		if ($fileType == "image/jpeg") {
			$resultadoSubida = subirImagenServidor($fileName, $fileType, $miImagen);

			if ($resultadoSubida) {
				
				$miniImagen = new Redimensionador("image/");
				$miniImagen->setAncho($_POST["ancho"]); #seteo mi ancho
				$miniImagen->setAlto($_POST["alto"]); #seteo mi alto
				$rutaOriginal = "../image/" . $fileName; #rutad donde se encuentra mi imagen original
				$rutaDestino = "../image/thumbs/";
				$miniImagen->generarMiniatura($rutaOriginal, $rutaDestino, $fileName);
				
			} else {
				echo "<br/>" . "ERROR..! La imagen no se subio :()";
			}
		} else {
			echo "Error, el formato permitido es jpg :|";
		}
	}



	function subirImagenServidor($fileName, $fileType, $miImagen){
		if (file_exists("../image/" . $_FILES["imagenSubida"]["name"])){ #compruebo que la imagen no tenga el mismo nombre que una existente
				return false;
		} else {
			move_uploaded_file($_FILES["imagenSubida"]["tmp_name"], "../image/" . $_FILES["imagenSubida"]["name"]);
			return true;
		}
	} #fin de de la funcion subirImagenServidor

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/estilos.css">
	<title>Formulario de Subida</title>
</head>
<body>
		<div class="imagen">
			<h2>Imagen Original</h2>
			<?php echo " <img src='../image/$fileName' class='imgMostrar'>"; ?>
			
			<br>
			<h2>Imagen Miniatura</h2>
			<?php echo "<img src='../image/thumbs/$fileName' class='imgMostrar'>"; ?>
		</div>
	<br>
		<a href="../html/formulario.html" class="linkRegresar">Regresar</a>
</body>
</html>
