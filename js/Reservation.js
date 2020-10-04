// création de la classe Reservation
class Reservation {

    constructor() {
        //Récupération des élements HTML
        this.reservationDate_elt = document.getElementById('reservationDate');
        this.nameClient_elt = document.getElementById('client');
        this.adresseStation_elt = document.getElementById('location');
        this.timeReservation_elt = document.getElementById('timereservation');
        this.isExpired_elt = document.getElementById('reservation');
        this.boutonStock_elt = document.getElementById("validCanvas");
        this.clearReservation_elt = document.getElementById("canceledreservation");
      
        //conteneur
        this.reservation = reservationElement;
        this.timeRemainingMinutes;
        this.timeRemainingSeconds;
        this.intervalId
        
        //btns stockage
        this.boutonStock_elt.addEventListener('click', (event) =>{
            clearInterval(this.intervalId)
            this.stockNameClient(),
            this.stockReservation(); 
        });

        this.clearReservation_elt.addEventListener('click', (event) =>{
            sessionStorage.clear(),
            clearInterval(this.intervalId)
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
            let reservationDate = sessionStorage.reservationDate_elt
            let dateNow = Date.now();
            //calcule de la différence 
            let difference = dateNow - reservationDate 
            //on convertie nos temps (ms) en minutes et secondes
            let minute = Math.floor((difference / 1000) / 60)
            let seconds = ((difference % 60000) / 1000).toFixed(0) *1
            // console.log(minute, seconds)

            //on verifie si la reservation n'est pas expirée?
            if (minute < 20){
                let minuteRemaining = 19 - minute
                let secondsRemaining = 60 - seconds
                secondsRemaining = secondsRemaining < 10 ? '0' + secondsRemaining : secondsRemaining;
                this.intervalId = setInterval(() => {
                    secondsRemaining--
                    if(minuteRemaining === 0 && secondsRemaining === 0){
                        this.isExpired_elt.innerHTML =  ` votre reservation est expiré veillez, reservé de nouveau`;
                        // on affiche les infos de la reservation
                        document.getElementById('infosReservation').style.display = 'block';
                        document.getElementById('reservationDate').style.display = 'none';
                        clearInterval(this.intervalId)
                        return
                    }
                    if(secondsRemaining < 0){
                        secondsRemaining = 59
                        minuteRemaining--
                    }
                    //on affiche le temps restant
                    this.isExpired_elt.innerHTML =  ` un vélo est reservé pour : ${minuteRemaining} min : ${secondsRemaining} s`;
                    this.nameClient_elt.innerHTML = `un vélo est reservé à la station : ${sessionStorage.stationName} pour :${localStorage.nom}  ${localStorage.prenom}`;
                       
                    //on affiche les informations et temps restant
                    document.getElementById('infosReservation').style.display = 'block';
                    document.getElementById('reservationDate').style.display = 'block';
                }, 1000);
                
            //la reservation est expirée
            } else {
                // // console.log('expired');  
                // this.isExpired_elt.innerHTML = ` votre reservation est expiré veillez, reservé de nouveau`;
                // document.getElementById('infosReservation').style.display = 'block';
                // document.getElementById('reservationDate').style.display = 'none';
                sessionStorage.clear()
                }        
        }        
    }  

   
    //LocalStorage
    stockNameClient (event) {
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

        // on stock nos données en session
        sessionStorage.stationName = stationName
        sessionStorage.reservationDate_elt = Date.now();   
        
    }
}

