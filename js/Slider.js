
//Déclaration de class (Slider)
class Slider{

	// définit notre constructor
    constructor(sliderElement){
		var Self=this;
    	this.sliderElement=sliderElement; //attributs
		console.log(this.sliderElement);
		
		// Séléction des items	
		this.items=document.querySelectorAll(".item"); //Nodelist  
		// console.log(this.items);
		this.totalItems =this.items.length;
		
	   
		//index du slide en cours
		this.index = 0;// 0 <=> this.items[0]

	    //séléction fléche gauche et droite
		this.Prev = document.querySelector("#gauche")		
		this.Next = document.querySelector("#droite")

		//Controle de nos slides
		this.Play = document.querySelector("#play")
		this.Pause = document.querySelector("#pause")
		

		// // déclanchement autoplay
		// this.playInterval = window.setInterval(function(){
		// 	this.goToNext.bind(this);
		// }, 1000)//(1000ms <=> 1s)

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

		// //Event clavier
		// window.addEventListener('keypress', function(event) {
           
		// 	switch(event){
		// 		case 37: // arrow-left
		// 			console.log('goToPrev() ');
		// 			break;
		// 		case 39: // arrow-right
		// 			goToNext();
		// 			break;
   
		// 	}
		// })

	}

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

		createPlayInterval(){
			let playInterval = null;
			this.playInterval = window.setInterval(function(){
				Self.goToNext();
			}, 1000)//(1000ms <=> 1s)
			
		}
		clearInterval(){
			
		}

      	
	  
}
