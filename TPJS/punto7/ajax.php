<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<script type="text/javascript">
	function getTimeAJAX(){
		var time = $.ajax({
			url: 'time.php', //indicamos la ruta done se genera la hora
			dataType: 'text', //indicamos el tipo de dato que sera la respuesta
			async:false
		}).responseText;

		document.getElementById("myWatch").innerHTML = "La fecha que hemos obtenido de time.php via AJAX es:" +time;
	}

	setInterval(getTimeAJAX, 1000); //llamamos a la funcion declarada mas arriba
</script>

<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="stylesheet" href="estilos.css">
	<meta charset="UTF-8">
	<title>Hora</title>
</head>
<body>

	<div id="myWatch">
		
	</div>
</body>
</html>