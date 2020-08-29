
//Déclaration de class (Slider)
class Slider{

	/* ***définit notre constructor*** */
    constructor(sliderElement){

        this.sliderElement=sliderElement; //attributs
		// console.log(this.sliderElement);
		
		// Séléction des items - Nodelist	
		this.items=document.querySelectorAll(".item");   
        this.totalItems =this.items.length;
        
        //index du slide en cours <=> notre compteur
        this.index = 0;
         
        //séléction fléche gauche et droite
        this.prev_elt = document.querySelector("#left")
        this.next_elt = document.querySelector("#rigth")
        
		//Controle de nos slides
        this.play_elt = document.querySelector("#play")
        this.pause_elt = document.querySelector("#pause")
         
        //Gestion des évenements
        this.playInterval = null;

        // Eventclick pour aller au slider suivant
        this.next_elt.addEventListener('click', ()=>{
            console.log('next');
            this.goToNext();      
        });

        // Eventclick pour aller au slider precédent
        this.prev_elt.addEventListener('click', ()=>{
            // console.log('prev');
            this.goToPrev();
        });

        // Eventclick pour play
		this.play_elt.addEventListener('click', ()=>{
			console.log('Play');
            this.clearPlayInterval();
            this.createPlayInterval();
        });
        
        // Eventclick pour pause
        this.pause_elt.addEventListener('click', ()=>{
			// console.log('Pause');
			this.clearPlayInterval();	
        });
        
        // Event - clavier
        window.addEventListener('keydown', (event) =>{
            switch(event.keyCode){
                case 37: // arrow-left <=> precedent
                    this.goToPrev();
                    break;
                case 39: // arrow-right <=> suivant
                    this.goToNext();
                    break;
            }
        });

        // Lancement autoplay
        this.createPlayInterval();
        
    }
    /* ***fin du constructor*** */

        // Fonctions..

        //Pour aller au slide suivant
        goToNext () {
            let indexSuiv=null;
            if (this.index < this.totalItems-1){
                indexSuiv = this.index + 1;
            } else{
                indexSuiv = 0;
            }
            this.items[this.index].classList.remove('slide-active');
            this.items[indexSuiv].classList.add('slide-active');
            this.index = indexSuiv;
        }
        //Pour revenir en arriére
        goToPrev ()  {
            let indexPrece=null;
            if (this.index <= 0){
                    indexPrece = this.totalItems-1;	 
            } else{
                indexPrece = this.index-1; 
            } 
            
            this.items[this.index].classList.remove('slide-active');
            this.items[indexPrece].classList.add('slide-active');
            this.index = indexPrece;
        }

        //Play
        createPlayInterval () {
            this.playInterval = window.setInterval( ()=>{
                // console.log('Play');
                let indexSuiv=null;
                if (this.index < this.totalItems-1){
                    indexSuiv = this.index + 1;
                } else{
                    indexSuiv = 0;
                }
                this.items[this.index].classList.remove('slide-active');
                this.items[indexSuiv].classList.add('slide-active');
                this.index = indexSuiv;
            }, 1200)//(1000ms <=> 1s)
            
        }

        //Pause
        clearPlayInterval () {
        window.clearInterval(this.playInterval);
        console.log('STOP');
        
        }

}