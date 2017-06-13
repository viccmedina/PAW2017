<?php 
include_once 'conexion.php';
include_once 'controlador.php';

$con = null;

$con = new Conexion();
if ($con == null){
	echo "error!";
} else {
	echo "estamos conectados!";
	$titulo = "Primero";
	$fecha = "13-06-2017";
	$comentario = "probando";
	$query = $con->prepare("INSERT INTO articulo(titulo, fecha, comentario) VALUES (:titulo, :fecha, :comentario);");
	
	$resultado->bindParam(":titulo", $titulo);
	$resultado->bindParam(":fecha", $fecha);
	$resultado->bindParam(":comentario", $comentario);

	if ($query->execute()){
		echo "se debio persistir";
	} else {
		echo "ERROR::!";
	}


}

$con = null;
?>

