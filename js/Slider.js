
//Déclaration de class
class Slider{
    constructor(slider){
       this.slider=slider;
       //Séléction des items
       this.slides=this.slider.querySelector(".slider-items").children; 
       this.totalSlides=this.slides.length;

       // obtenir la largeur du sliderconteneur 
       this.containerWidth=this.slider.offsetWidth;

       //séléction fléche gauche et droite
        this.Gauche=this.slider.querySelector("#gauche")
        this.Droite=this.slider.querySelector("#droite")

       //Navigation des slides

       let nav=this;
       // methode pour aller a gauche
       this.Gauche.onclick=function (){
           console.log("this.Gauche.onclick");
          nav.gauche()    
       }
        // methode pour aller a droite
       this.Droite.onclick=function (){
        console.log("this.Droite.onclick");
           nav.droite()
          }
       this.index=0;
       this.jumWidth=0;
     
   }
       
   //gauche
   gauche(){
       console.log("gauche");
       if(this.index==0){
           this.index=this.totalSlides-1;
           this.jumWidth=this.containerWidth*(this.containerWidth-1);
       }
       else{

           this.index--;
           this.jumWidth=this.jumWidth-this.containerWidth;
       }
       
       this.slider.querySelector(".slider-items").style.marginLeft=-this.jumpWidth+"px"
    }
   
    //droite
    droite(){
      console.log("droite");
        if(this.index==this.totalSlides-1){
            this.index=0;
            this.jumWidth=0;
        }
        else{
            this.index++;
            this.jumWidth=this.jumWidth+this.containerWidth;
       }
       
       this.slider.querySelector(".slider-items").style.marginLeft=-this.jumpWidth+"px"
   }
}