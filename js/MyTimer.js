// création de la classe Timer
class MyTimer {

  constructor(startMinutes, startSeconds, Reservation) {
    this.countDown = timerElement;
    this.startMinutes = startMinutes;
    this.startSeconds =  startSeconds;
    this.time = this.startMinutes * 60;
    
  }

  //mise en place de notre timer 
  startTimer() {
    clearInterval(this.interval);
    this.startMinutes = 19;
    this.time = this.startMinutes * 60 + this.startSeconds;
    this.interval = setInterval(() => {
      this.updateCountDown();
    }, 1000);
    sessionStorage.setItem('time',this.interval);
    // console.log;
  }

  updateCountDown() {
    //nombre entier
    let minutes = Math.floor(this.time / 60); 
    //reste division
    let seconds = this.time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    this.countDown.innerHTML = `votre réservation sera supprimer dans: ${minutes} min ${seconds}sec` ;
    this.time--;
    //on arrête le timer à 0
    if (minutes <= 0 && seconds <= 0) {
      clearInterval(this.interval);
      //session storage.clear
      my_reservation.sessionStorage.clear();
      this.countdown.innerHTML = 'Temps écoulé.';
    }
  }

//Annulation du timer
  stopTimer(){
    clearInterval(this.interval);
    this.countDown.innerHTML = `votre réservation est annulée`;
    // console.log('finish');
    
  }

  
}


