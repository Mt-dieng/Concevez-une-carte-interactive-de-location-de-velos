
//Déclaration de class
class Slider{
    constructor(slider){
      this.currentIndex = 0;
      this.slider = slider;

      //Séléction des items
      this.slides = this.slider.querySelectorAll(".item"); 
      
      // Totlal des slides
      this.totalSlides = this.slides.length;
      this.lastIndex = this.slides.length - 1;
      
      //séléction fléche gauche et droite
      this.Prev = this.slider.querySelector("#gauche")

      this.Next = this.slider.querySelector("#droite")
      this.Play = this.slider.querySelector("#play")
      console.log(this.Play);
      this.Pause = this.slider.querySelector("#pause")
        
      
      //initialisation de la première slide
      
      //this.slideToIndex(this.currentIndex, false);

      //initialisation des événements sur les boutons

      // methode pour play
       
      // methode pour pause
        
     
        // methode pour aller a gauche
        

      // methode pour aller a droite
       
      //les évenements  
       
        /*//keyboard
        document.onkeydown = ($event) => {
            switch ($event.keyCode) {
                case 39: //rigth arrow- code
                    this.moveToNext();
                    break;
                case 37: //left arrow - code
                    this.moveToPrev();
                    break;
            }
        }   */
        this.Pause.addEventListener('click', () => {
            this.stop();
        });
        this.Play.addEventListener('click', () => {
            this.start();
        });

    }
           
   
      //play

      //pause

      //gauche
    

     
      //droite}
  
}