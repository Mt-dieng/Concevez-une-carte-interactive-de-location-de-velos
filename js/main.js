document.addEventListener("DOMContentLoaded", function(event) 
{ 
	
/*================================== Slider =====================================*/
/*==============================================================================*/

// Récupération du conteneur
let sliderElement = document.querySelector(".slider");

// création de notre objet
let my_slider_1 = new Slider (sliderElement);
});

/*================================== Carte =====================================*/
/*==============================================================================*/

// Récupération du conteneur
let mapElement = document.getElementById('map');

//création des options de la carte
let besançon = {lat : 47.237829, lng : 6.0240539};

let mapOptions = {	
	// location Besançon
	center: besançon,
	zoom: 14,
	
	// disableDefaultUI: true,
	// scrollwheel: true
	// mapTypeId: google.maps.MapTypeId.HYBRID

};

//
/*=================== CALLBACK chargement du google map ================*/
function gMapCallBack() {
	
	// creation de notre objet map
	let my_map_1 = new MyMap (mapElement, mapOptions);

	//initialisation de la carte
	my_map_1.initMap();
	
	// récupération du tableau des stations
	let tableStations = [];

	// appel AJAX par GET
	const xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=besancon&apiKey=a9894cabd522f540bdcb21976dbdd92b43a0a85a')

	xhr.responseType = "json";
	

	xhr.send();
	

	xhr.onload = function(){

		//Si le statut HTTP n'est pas 200...
		if (xhr.status != 200){ 
			//...On affiche le statut et le message correspondant
			alert("Erreur " + xhr.status + " : " + xhr.statusText);
		//Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
		}else{ 	

		// on crée nos marker
		my_map_1.createMarkers(xhr.response);
		}
	};

}

/*============================= bouton reserver =================================*/
/*==============================================================================*/

let btnReserve_elt = document.getElementById('btnreserve');
btnReserve_elt.addEventListener('click', function(event){
	event.preventDefault();
	let lastNameValue = document.forms["myForm"]["lastName"].value;
	if(lastNameValue == '' ) {
		alert('veillez remplir infos');
		return false	
	} else {
		document.getElementById('canvas').style.display = 'block';
		document.getElementById('controlCanvas').style.display = 'block';
	}
});

/*================================== Canvas =====================================*/
/*==============================================================================*/

//Récupération du conteneur
let canvasElement = document.getElementById('canvas');
// création de notre objet
const my_canvas = new Canvas();

/*================================== Timer =====================================*/
/*==============================================================================*/

//Récupération du timer
let timerElement = document.getElementById('reservation');
const my_timer = new MyTimer(19, 60);
let date = new Date();
let startCount = document.getElementById('validCanvas');
let stopCount = document.getElementById("canceledreservation");
startCount.addEventListener('click', (event) => {
	my_timer.startTimer()
	
  });
stopCount.addEventListener('click', (event) => {
  	my_timer.stopTimer()

});

/*================================= Reservation =================================*/
/*==============================================================================*/

/*=======================Récupération du reservation==============*/
let reservationElement = document.getElementById('inforeservation');

const my_reservation = new Reservation();

/* on appelle notre methode pour verifier l'existence d'une reservation */
my_reservation.isValidReservation();
