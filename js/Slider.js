
//Déclaration de class
class Slider{
    constructor(slider){
      this.currentIndex = 0;
       this.isPaused = false;
      this.slider = slider;
      //Séléction des items
      this.slides = this.slider.querySelectorAll(".item"); 
      this.totalSlides = slides.length;
      this.lastIndex = this.slides.length - 1;
      console.log(this.lastIndex);
      

      //séléction fléche gauche et droite
      this.Prev = this.slider.querySelector("#gauche")
      this.Next = this.slider.querySelector("#droite")
      this.Play = this.slider.querySelector("#play")
      this.Pause = this.slider.querySelector("#pause")
        
      
      //initialisation de la première slide
      this.slideToIndex[this.currentIndex];
  
      
      //Gestion des évenements 
       
        // methode pour aller au slider précedent
        this.Prev.addEventListener('click', () => this.slideToPrev())
        // methode pour aller au slider suivant
        this.Next.addEventListener('click', () => this.slideToNext())
        // methode pour pause
            
        // methode pour pause
            
        //Fontion clavier
       /* document.onkeydown = ($event) => {
            switch ($event.keyCode) {
                case 39: //rigth arrow- code
                    this.moveToNext();
                    break;
                case 37: //left arrow - code
                    this.moveToPrev();
                    break;
            }}*/
        

    }
           
   
      //play

      //pause

      //gauche
      
      //droite}
  
}
