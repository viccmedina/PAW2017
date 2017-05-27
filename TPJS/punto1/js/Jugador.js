class Jugador{
	constructor(name){
		this.name = name;
		this.score = 0;
	}

	 getScore(){
		return this.score;
	}

	 getName(){
		return this.name;
	}

	 setScore(){
		this.score++;
	}
}