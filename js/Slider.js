
//Déclaration de class (Slider)
class Slider{

	// définit notre constructor
    constructor(sliderElement){
		var Self=this;
    	this.sliderElement=sliderElement; //attributs
		console.log(this.sliderElement);
		
		// Séléction des items	
		this.items=this.sliderElement.querySelectorAll(".item"); //Nodelist  
		this.totalItems =this.items.length;
		// console.log(this.totalItems);
	   
		// index du slide en cours
		this.index = 0;// 0 <=> this.items[0]

	    //séléction fléche gauche et droite
		this.Prev = this.sliderElement.querySelector("#gauche")
		this.Next = this.sliderElement.querySelector("#droite")

		//Controle de nos slides
		this.Play = this.sliderElement.querySelector("#play")
		this.Pause = this.sliderElement.querySelector("#pause")
		let playInterval = null;

		// déclanchement autoplay
		this.playInterval = window.setInterval(function(){
			this.goToNext.bind(this);

		}, 1000)//(1000ms <=> 1s)

		//Gestion des évenements 
       
        // Eventclick pour aller au slider précedent
		this.Prev.addEventListener('click', function(){
			console.log('clickprec');
			goToPrev();
		})

        // Eventclick pour aller au slider suivant
		this.Next.addEventListener('click', function(){
			console.log('clicksuiv');
			goToNext();	
		})

		//Autoplay avec 2 param(fct & time)
		// window.setInterval(function(){
		// 	goToNext();
		// }, 1000)//(1000ms <=> 1s)

		// Eventclick pour play
		this.Play.addEventListener('click', function(){
			console.log('Play');
			clearInterval(Self.playInterval);
			createPlayInterval();
		})
        
        // Eventclick pour pause
        this.Pause.addEventListener('click', function(){
			console.log('Pause');
			clearInterval(Self.playInterval);	
		})

		//Event clavier
		window.addEventListener('keypress', function(event) {
           
			switch(event){
				case 37: // arrow-left
					console.log('goToPrev() ');
					break;
				case 39: // arrow-right
					goToNext();
					break;
   
			}
		})

	};

	// Gestion de nos Methodes
	goToNext(){
		let indexSuiv=null;
		if (Self.index < Self.totalItems-1){
			 indexSuiv = Self.index + 1;
		} else{
			 indexSuiv = 0;
		}
		Self.items[Self.index].classList.remove('slide-active');
		Self.items[indexSuiv].classList.add('slide-active');
		Self.index = indexSuiv;
	}

	goToPrev(){
		let indexPrece=null;
			console.log(indexPrece);
		if (Self.index <= 0){
				indexPrece = Self.totalItems-1;	 
		} else{
			indexPrece = Self.index-1; 
		} 
		
		Self.items[Self.index].classList.remove('slide-active');
		Self.items[indexPrece].classList.add('slide-active');
		Self.index = indexPrece;
	}

	createPlayInterval (Self){
		this.playInterval = window.setInterval(function(){
			Self.goToNext();
		}, 1000)//(1000ms <=> 1s)
		
	}

      	
	  
}
