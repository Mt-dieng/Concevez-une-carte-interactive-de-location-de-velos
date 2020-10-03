// création de la classe Reservation
class Reservation {

    constructor() {
        //Récupération des élements HTML
        this.boutonStock_elt = document.getElementById("validCanvas");
        
        this.reservationTimer_elt = document.getElementById('timerReservation');
        this.reservationDate_elt = document.getElementById('reservationDate');
        this.nameClient_elt = document.getElementById('client');
        this.adresseStation_elt = document.getElementById('location');
        this.timeReservation_elt = document.getElementById('timereservation');
        this.isExpired_elt = document.getElementById('reservation');
        this.clearReservation_elt = document.getElementById("canceledreservation");
      
        //conteneur
        this.reservation = reservationElement;
        this.timeRemainingMinutes;
        this.timeRemainingSeconds;
        
        //btns stockage
        this.boutonStock_elt.addEventListener('click', (event) =>{
            this.stockNameFirstNa(),
            this.stockReservation(); 
        });

        this.clearReservation_elt.addEventListener('click', (event) =>{
            sessionStorage.clear(),
            my_timer_2.stopTimer()
           console.log("arret");
            document.getElementById('reservationDate').style.display = 'none';
        });

    }

    //format de la date
    DateFormat(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let seconds = date.getSeconds();
        seconds = seconds < 10 ? '0' + seconds : seconds;
        let starTime = hours + ':' + minutes + ':' + seconds;
        return starTime;
    }


    /* Vérification de la validité d'une reservation = 
    une reservation existe en stockage + la reservation n'est pas expirée */
    isValidReservation(){
        //est ce qu'une reservation existe en stockage
        if(sessionStorage.stationName){
            // la reservation n'est pas expirée ?
            //calcule de la différence 
            let reservationDate = new Date(sessionStorage.reservationDate);
            let dateNow = new Date();
            
            let difference = Math.abs(reservationDate - dateNow);
            let difference_minutes = Math.floor((difference/1000)/60);
            let difference_seconds = ((difference % 60000) / 1000).toFixed(0);
            
            this.timeRemainingMinutes = '19' - difference_minutes;
            console.log(this.timeRemainingMinutes);
            this.timeRemainingSeconds = '60' - difference_seconds;
            console.log(this.timeRemainingSeconds);
            my_timer_2.startTimer(this.timeRemainingMinutes, this.timeRemainingSeconds);
            //la reservation n'est pas expirée
            console.log(typeof(difference_minutes));
            if (difference_minutes < 20){
                setInterval(() => {
                    //on affiche le temps restant
                    this.isExpired_elt.innerHTML =  ` un vélo est reservé pour : ${this.timeRemainingMinutes} min : ${this.timeRemainingSeconds} s`;
                    this.nameClient_elt.innerHTML = `un vélo est reservé à la station : ${sessionStorage.stationName} pour :${localStorage.nom}  ${localStorage.prenom}`;
                    let timerElement = document.getElementById('reservation');
                    const my_timer_2 = new MyTimer(this.timeRemainingMinutes, this.timeRemainingSeconds);
                    my_timer_2.startTimer();
                    //on affiche les informations et temps restant
                    document.getElementById('infosReservation').style.display = 'block';
                    document.getElementById('reservationDate').style.display = 'block';
                }, 1000);
                
            //la reservation est expirée
            } else {
                console.log('expired');
                
                this.isExpired_elt.innerHTML =  ` votre reservation est expiré veillez, reservé de nouveau`;
                document.getElementById('infosReservation').style.display = 'block';
                document.getElementById('reservationDate').style.display = 'none';
                // sessionStorage.clear()
                }        
        }        
    }  

   
    //LocalStorage
    stockNameFirstNa (event) {
	
        let nom = document.getElementById('lastName').value;
        let prenom = document.getElementById('firstName').value;
        //stockage directe
        localStorage.nom = nom
        localStorage.prenom = prenom
        // on affiche(Nom_prenom_client)
        this.nameClient_elt.innerHTML = `vélo réservé par :  ${nom} ${prenom}`;
    }
     //SessionStorage
    stockReservation(event) {

        // on affiche notre reservation(Nom_prenom/nom_de_station/l'heure_d_expiration)
        let stationName = document.getElementById('station_name').innerText;
        this.adresseStation_elt.innerHTML = `à la station : ${stationName}`;
        this.timeReservation_elt.innerHTML =  ` à : ${this.DateFormat(new Date())}`;
// this.reservationTimer_elt= my_timer_2;
// console.log(this.reservationTimer_elt);
        // on stock nos
        sessionStorage.stationName = stationName
        sessionStorage.reservationDate_elt = new Date();   
    //     sessionStorage.reservationTimer_elt = my_timer_2.startTimer();  
    //    console.log(my_timer_2.startTimer());
        
    }
}

