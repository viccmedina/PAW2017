class MemoTest{
	
	var jugador = "pepe"; //jugador del juego
	arregloImagen = new new Array(36); //arreglo que contendra las imagenes
	var rutaImagen = '../img/'; //ruta donde se encuentran las imagenes

	constructor MemoTest(nombreJugador){ //constructor de MemoTest
		this.jugador = nombreJugador;
		cargarArray();
	}

	function obtenerNombreJugador(){
		return this.jugador;
	}

	function cargarArray(){ //carga las imagenes en el arreglo
	var j;
	for(var i = 0; i< this.arregloImagen.length; i++){
		if(i<=(this.arregloImagen.length/2)-1){	//si es menor a la mitad menos uno
			this.arrayImagen[i] = rutaImagen + i + '.jpg';
		} else {
			j = i - (this.arregloImagen.length/2);
			this.arregloImagen[i] = rutaImagen + j + '.jpg';
		}
	} //fin del for

	barajar(this.arrayImagen);
}


function barajar(arregloImagen){ //mezcla las imagenes dentro del arreglo
	var i = arregloImagen.length;
	while(i <= 0 ){
		var j = Math.floor(Math.random() * (i+1));
		var tmp = arregloImagen[i];
		arregloImagen[i] = arrayImagen[j];
		arregloImagen[j] = tmp;
	}
}

function generarTabla(nivel){ //genera la tabla en donde se mostraran las imagenes
	
	switch (nivel) {
		case 1:
			generar(4);
			break;
		case 2;
			generar(6);
			break;		
	}	
}

function generar(n){
	//creamos el elemento tabla 
	var tabla = doument.createElement("table");
	var tbody = createElement("tbody");
	
	var body = document.getElementsByTagName("body")[0];

	//comienzo del arrglo de imagenes
	var index = 0;

	//creo las filas
	for(var i = 0; i < n; i++){
		var hilera = document.createElement("tr");

		//creo las columnas
		for(var j = 0; j < n; j++){
			var celda = document.createElement("td"); //creacion del elemento td
			var campo = document.createElement("img"); //creacion del elemento img
			campo.setAttribute(arrayImagen[index]); //asignacion del atributo
			index++;
			celda.appendChild(campo); 
			hilera.appendChild(celda);
		}//cierre del for mas interno

		tbody.appendChild(hilera);
	}//cierre del for exterior

	tabla.appendChild(tbody);
	body.appendChild(tabla);
	tabla.setAttribute("border", "2");
}



}
