class MyTimer {

  constructor() {
    this.countDown = timerElement;
    this.startMinutes = 20;
    this.time = this.startMinutes * 60;
    this.starCount = document.getElementById('validCanvas');
    this.stopCount = document.getElementById("annulereserv");
    this.starCount.addEventListener('click', (event) => this.startTimer());
    this.updateCountDown();
    
    
    this.stopCount.addEventListener('click', (event) => {
      this.stopTimer()
    });
    
    
  }

  startTimer() {
    clearInterval(this.interval);
    this.startMinutes = 20;
    this.time = this.startMinutes * 60;
    this.interval = setInterval(() => {
      this.updateCountDown();
    }, 1000);
  }

 

  updateCountDown() {
    //nombre entier
    let minutes = Math.floor(this.time / 60); 
     //reste division
    let seconds = this.time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

  //  this.countDown.innerHTML = `Temps restant : ${minutes}min ${seconds}sec`;
   this.countDown.innerHTML = `votre réservation sera supprimer dans: ${minutes}min ${seconds}sec`;

    this.time--;

    if (minutes <= 0 && seconds <= 0) {
      clearInterval(this.interval);
      this.countdown.innerHTML = 'Temps écoulé.';
    }
  }

  stopTimer(){
    clearInterval(this.interval);
    this.countDown.innerHTML = `votre réservation est annulée`;
    console.log('finish');
    
  }

  
}


