class MyReservation {

    constructor() {
    this.reservation = reservationElement;
    this.nom = document.getElementById('lastName').value;
    this.prenom = document.getElementById('firstName').value;
    this.boutonStock_elt = document.getElementById('boutonreserver');
    this.heureActuelle = new Date();
    this.heureDexpiration = null;
    this.boutonStock_elt.addEventListener('click', (event) =>this.stockNomPrenom());
    this.boutonStock_elt.addEventListener('click', (event) =>this.stockReservation());
    
   
    }

    tempsDeReservation(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

DateFormat(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = date.getSeconds();
    // let seconds = this.time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let starTime = hours + ':' + minutes;
    return starTime;
}
//     isValidReservation(){
//         if( sessionStorage.stationName){
// console.log('une réservation existe deja');
// let differents = dateactuel - datede reservation
// is difference < 20 

// return true
// if( diffe<= 20){
//     affiche prompt (reservation expirée )
//     kill reservation
// }
//         }
//        return false; 
//     }



difference(){
    this.heureDexpiration = this.tempsDeReservation(this.heureActuelle,20);
    return  (this.heureDexpiration - this.heureActuelle)/60000;
    console.log(difference);
}







    stockNomPrenom (event) {
	
        console.log('stockNomPrenom()');
        let nom = document.getElementById('lastName').value;
        let prenom = document.getElementById('firstName').value;
        
        localStorage.nom = nom
        localStorage.prenom = prenom
    }
    
    stockReservation(event) {
        console.log('stockReservation');
        let stationName = document.getElementById('station_name').innerText;
        
    
        sessionStorage.stationName = stationName
        sessionStorage.reservationDate = new Date()
    }
}

