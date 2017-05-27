class Nivel{
	constructor(numberLevel, totalMatches){
		this.numberLevel = numberLevel;
		this.status = false;
		this.imgPath = '../img3/';
		this.imgExtension = '.jpg';
		this.cards = new Array();
		this.totalMatches = totalMatches;
	}

	setLevel(size){
		var front;
		var back = this.imgPath + 'cubierta' + this.imgExtension;
		while (size > 0){
			front = this.imgPath + size + this.imgExtension;
			var cardOne = new Carta(front, back, size);
			this.cards.push(cardOne);
			front = this.imgPath + size + this.imgExtension;
			var cardTwo = new Carta(front, back,size-1);
			this.cards.push(cardTwo);
			size = size -2;
		}
		
	}

	getTotalMatches(){
		return this.totalMatches;
	}

	getCards(){
		return this.cards;
	}

	getStatusLevel(){
		return this.status;
	}

	setTotalMatches(){
		this.totalMatches--;
	}

	setStatusLevel(){
		this.status = true;
	}

	getNumberLevel(){
		return this.numberLevel;
	}

	shuffle(){
		this.cards.sort(function() {return Math.random() - 0.5});	
	}
}