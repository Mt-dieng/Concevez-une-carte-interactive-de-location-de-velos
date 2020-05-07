
//Déclaration de class (Slider)
class Slider{

// définit notre constructor
    constructor(sliderElement){
		var Self=this;
    	this.sliderElement=sliderElement; //attributs
    	console.log(this.sliderElement);
	// Séléction des items	
		this.items=this.sliderElement.querySelectorAll(".item"); //Nodelist
		// console.log(this.items);   
	
	this.totalItems =this.items.length;
	console.log(this.totalItems);
	   
	// index du slide en cours
		this.index = 0;

	    //séléction fléche gauche et droite
		this.Prev = this.sliderElement.querySelector("#gauche")
		this.Next = this.sliderElement.querySelector("#droite")
		this.Play = this.sliderElement.querySelector("#play")
		this.Pause = this.sliderElement.querySelector("#pause")

      
      //Gestion des évenements 
       
        // methode pour aller au slider précedent
		this.Prev.addEventListener('click', function(){
			console.log('clickprec');
			let indexPrece=null;
			console.log(indexPrece);
			if (Self.index == Self.totalItems){
				 indexPrece = Self.index - 1;
				 
				 
			} else{
				 indexPrece = Self.totalItems;
			}
			Self.items[Self.index].classList.add('slide-active');
			Self.items[indexPrece].classList.remove('slide-active');
			Self.index = indexPrece;
		})
        // methode pour aller au slider suivant
		this.Next.addEventListener('click', function(){
			console.log('clicksuiv');
			let indexSuiv=null;
			if (Self.index < Self.totalItems-1){
				 indexSuiv = Self.index + 1;
			} else{
				 indexSuiv = 0;
			}
			Self.items[Self.index].classList.remove('slide-active');
			Self.items[indexSuiv].classList.add('slide-active');
			Self.index = indexSuiv;
			
		})
        // methode pour play
        
        // methode pour pause
        

//         //Fontion clavier
//        /* document.onkeydown = ($event) => {
//             switch ($event.keyCode) {
//                 case 39: //rigth arrow- code
//                     this.moveToNext();
//                     break;
//                 case 37: //left arrow - code
//                     this.moveToPrev();
//                     break;
//             }}*/
        

//     }
           
   


      }
}
