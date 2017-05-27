var primero = true;	
var imgUno;
var imgDos;
var maximo = 36;
arregloImagen = new Array(maximo); //arreglo que contendra las imagenes
var rutaImagen = '../img3/'; //ruta donde se encuentran las imagenes
var nivel = 1; //se comienza desde el nivel 1
var total; //cantidad de imagenes por nivel

function cargarArray(){ //carga las imagenes en el arreglo
var j = arregloImagen.length;
var comenzarOtraVez = (arregloImagen.length/2)-1;
var numeroImagen = 0;
	while (j > 0){
		console.log(rutaImagen + numeroImagen + '.jpg');
		if(numeroImagen == comenzarOtraVez){
			arregloImagen[j] = rutaImagen + numeroImagen + '.jpg';
			numeroImagen = 0;
		} else {
			arregloImagen[j] = rutaImagen + numeroImagen + '.jpg';
			numeroImagen++;
		}
		j--;
	}
	barajar(arregloImagen);
}

/*PREG - POR QUE SI LE MANDO ARRGLOIMAGEN NO ME GENERA EL RANDOM*/
function barajar(arreglo){ //mezcla las imagenes dentro del arreglo
	arreglo = arreglo.sort(function() {return Math.random() - 0.5});
}

function verificarImagen(ruta){
	//pregunto si es la primera carta que se dio vuelta
	if (primero) {
		primero = false;
		console.log(ruta);
		imgUno = ruta;
	} else {
		//sino, es la segunda vez que se dio vuelta una carta
		primero = true;
		imgDos = ruta;
		console.log(ruta);
		//comparo si son las mismas cartas
		if (imgUno == imgDos){
			console.log("Son iguales");
			total--;
			if (total == 0){
				console.log("Fin del Juego");
				nivel = 2;
				generarTabla(nivel);
			}
		}else{
			console.log("No son Iguales");
			}
	}
	console.log(total);
	
}

var cambiarImagen = function(imagen){
	imagen.src = rutaImagen + "cubierta.jpg";
}

function generarTabla(nivel){ //genera la tabla en donde se mostraran las imagenes
	
	switch (nivel) {
		case 1:
			total = 8;
			generar(4);
			break;
		case 2:
			total = 16;
			generar(6);
			break;		
	}	
}

function generar(n){
	//creamos el elemento tabla 
	var tabla = document.createElement("table");
	var tbody = document.createElement("tbody");
	
	var body = document.getElementsByTagName("body")[0];

	//comienzo del arrglo de imagenes
	var index = 0;
	var fin = (arregloImagen.length/4)-1;
	//creo las filas
	console.log(arregloImagen);
	for(var i = 0; i < fin; i++){
		var hilera = document.createElement("tr");

		//creo las columnas
		for(var j = 0; j < fin; j++){
			var celda = document.createElement("td"); //creacion del elemento td
			celda.setAttribute("class", "fondoTD"); /*ponerle el fondo al td */
			var campo = document.createElement("img"); //creacion del elemento img
			campo.setAttribute("src", arregloImagen[index]); //asignacion del atributo
			campo.setAttribute("id", index);
			campo.setAttribute("onclick", "verificarImagen('"+arregloImagen[index]+"')");
			/*
			campo.addEventListener(
				"click",
				function (){verificarImagen(campo.getAttribute("src"));} //declaro una funcion anonima
			);
		*/
			
			celda.appendChild(campo); 
			hilera.appendChild(celda);
			index++;
		}//cierre del for mas interno

		tbody.appendChild(hilera);
	}//cierre del for exterior

	tabla.appendChild(tbody);
	body.appendChild(tabla);
	tabla.setAttribute("border", "2");
}


function comenzarJuego(){
	cargarArray();
	generarTabla(nivel);
}

