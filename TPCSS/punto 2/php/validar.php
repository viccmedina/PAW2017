<?php
	$titulo = $nombre = $telefono = $email = $colorPelo = ""; #inicializo las variables

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	# llamo a la funcion que le quita lo inncesario al texto.
	$titulo = limpiarFormato($_POST["titulo"]);  #$_POST["titulo"] es como la declare en el html
	$nombre = limpiarFormato($_POST["nombre"]);
	$telefono = limpiarFormato($_POST["telefono"]);
	$email = limpiarFormato($_POST["email"]);
	$colorPelo = limpiarFormato($_POST["colorPelo"]);
	$altura = $_POST["altura"];
	$talla = $_POST["talla"];
	$fechaNacimiento = $_POST["fechaNacimiento"];
}

function limpiarFormato($dato){
#devuelve una cadena con los espacios en blanco eliminados del inicio y final
	$dato = trim($dato); 

	$dato = stripslashes($dato); #Devuelve un string con las barras invertidas retiradas

	/*Ciertos caracteres tienen un significado especial en HTML y deben ser representados por entidades HTML si se desea preservar su significado. Esta función devuelve un string con estas conversiones realizadas. Ejemplo &*/
	$dato = htmlspecialchars($dato); 

	return $dato;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="../css/estilo.css">
	<title>Formulario de Turno</title>
</head>
<body>
		
		<form class="formularioTurno">
			<h2>Formulario de Turno</h2>

			<div class="contenedorImg">
				<img src="../img/logo.png" alt="logo" class="logo">
			</div>
			
			<div class="contenedor">
				<label><i>Título:</i></label>
				<?php echo "    <strong>" . $titulo . "</strong>"; ?>
				<br>

				<label><i>Nombre:</i></label>
				<?php echo "    <strong>" . $nombre . "</strong>";  ?>
				<br>

				<label><i>Email:</i></label>
				<?php echo "    <strong>" . $email . "</strong>";?>
				<br>

				<label><i>Telefono:</i></label>
				<?php echo "    <strong>" . $telefono . "</strong>"; ?>
				<br>

				<label><i>Edad:</i></label>
				<?php echo "    <strong>" . $_POST["edad"] . "</strong>";?>
				<br>

				<label><i>Calzado:</i></label>
				<?php echo "    <strong>" . $talla . "</strong>"; ?>
				<br>
				<label><i>Altura:</i></label>
				<?php echo $altura; ?>
				<br>
				<label><i>Nacimiento:</i></label>
				<?php echo "    <strong>" . $fechaNacimiento . "</strong>"; ?>
			
				<br>
				<label><i>Color de Pelo:</i></label>
				<?php echo "    <strong>" . $colorPelo . "</strong>" ; ?>
			
				<br>
	
				<label>Horario del Turno:</label>
				<?php echo "    <strong>" . $_POST["horarioTurno"] . "</strong>"; ?>
				
				<br><br>
				<a href="../html/index.html">Regresar</a>
		</form>
</body>
</html>