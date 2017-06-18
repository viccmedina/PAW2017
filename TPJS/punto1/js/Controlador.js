var primero = true;
var nivelUno = new Nivel(1, 8); /*genero el nivel uno con una matriz de 4x4*/
var nivelDos = new Nivel(2, 16);
var imgDos;
var imgUno;
var indexUno;
var indexDos;
var ultimo = false;
var ruta = '../img3/cubierta.jpg';

function comenzarJuego(){
	var j1 = new Jugador('Victoria');
	console.log("Bienvenida " + j1.getName());
	
	nivelUno.setLevel(16);
	console.log(nivelUno.getCards());
	nivelUno.shuffle();
	console.log(nivelUno.getCards());
	generarTabla(nivelUno.numberLevel, nivelUno.getCards());
	nivelUno.setStatusLevel();
	
}

function generarTabla(nivel, arreglo){ //genera la tabla en donde se mostraran las imagenes
	
	switch (nivel) {
		case 1:
			generar(4, arreglo);
			break;
		case 2:
			generar(6, arrgelo);
			break;		
	}	
}

var verificarImagen = function(imagen, index){
	
	document.getElementById(index).setAttribute("src", imagen.getFront());
	
	//pregunto si es la primera carta que se dio vuelta
	if (primero) {
		primero = false;
		imgUno = imagen.getFront();
		indexUno=index;
		console.log('La carta es:' + imgUno);
		
	} else {
		
		//sino, es la segunda vez que se dio vuelta una carta
		primero = true;
		imgDos = imagen.getFront();
		console.log('La carta es:' + imgDos);
		indexDos = index;
		//comparo si son las mismas cartas
		if (imgUno == imgDos){
			console.log("Son iguales");
			nivelUno.setTotalMatches();
			indexDos = imagen.getID();
			console.log("Total de macthes: " + nivelUno.getTotalMatches());
			if (nivelUno.getTotalMatches() == 0){
				console.log("Fin del Juego");
				nivelUno.setStatusLevel();
				alert("Nivel Completado");
				if (ultimo == false){
					nivelDos.setLevel(36);
					nivelDos.shuffle();
					ultimo = true;
					generarTabla(nivelDos.getNumberLevel(), nivelDos.getCards());
				}

			}
		}else{
			setTimeout(function(){
				console.log("No son Iguales");
			document.getElementById(indexUno).setAttribute("src", ruta);
			document.getElementById(indexDos).setAttribute("src", ruta);	
			}, 1000);
			
			}
	}
	console.log(this.nivelUno.getTotalMatches());
}

function generar(n, arreglo){
	//creamos el elemento tabla 
	var tabla = document.createElement("table");
	var tbody = document.createElement("tbody");
	
	var body = document.getElementsByTagName("body")[0];

	//comienzo del arrglo de imagenes
	var index = 0;
	arregloImagen = arreglo;

	var fin = (arregloImagen.length/n);
	//creo las filas
	for(var i = 0; i < fin; i++){
		var hilera = document.createElement("tr");

		//creo las columnas
		for(var j = 0; j < fin; j++){
			var celda = document.createElement("td"); //creacion del elemento td
			celda.setAttribute("class", "fondoTD"); /*ponerle el fondo al td */
			var campo = document.createElement("img"); //creacion del elemento img
			console.log(arregloImagen[index].getFront());
			campo.setAttribute("src", arregloImagen[index].getBack()); //asignacion del atributo
			campo.setAttribute("id", index);
			//campo.setAttribute("onclick", "verificarImagen('"+ arregloImagen[index].getFront() + " '," + index +" )");
			
			// CLOSURE
			campo.addEventListener("click", verificarImagen.bind(null, arregloImagen[index], index), false);

			/*
			campo.addEventListener("click", function(){
				var myImg = arregloImagen[index];
				console.log("juan: ", myImg);
				return verificarImagen(myImg);
			});*/
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
