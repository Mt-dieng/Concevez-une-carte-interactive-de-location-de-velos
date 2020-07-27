//Déclaration de class map
class MyMap{
    
    // Déclaration de notre constructor
    constructor (mapElement, mapOptions) {
        this.mapElement = mapElement;
        this.mapOptions = mapOptions;   
        this.googleMap = null;
        // création un tableau vide pour recuperer nos marqueurs
        this.markers = [];
       
    }

    //methode iniMat   
    initMap(){
        this.googleMap = new google.maps.Map(this.mapElement, this.mapOptions);
    }

    createMarkers(stations){
        //on parcours chaque stations
        for (let i=0; i<stations.length; i++){
            //création du marker googlemap
            let position = {lat : stations[i].position.lat, lng : stations[i].position.lng};
            let name = stations[i].name;
            let address = stations[i].address;
            let number = stations[i].number;
            let status = stations[i].status;
            let available_bikes = stations[i].available_bikes; 
            
            
            this.markers[i] = new google.maps.Marker({
                position: position,
                map: this.googleMap,
                name: name,
                address: address,
                number : number,
                status : status,
                available_bikes : available_bikes
            });

            // création de l'evenement click 
            let form_station_number_elt = document.getElementById('station_number');
            let form_station_name_elt = document.getElementById('station_name');
            let form_station_address_elt = document.getElementById('station_address');
            let form_station_position_elt = document.getElementById('station_position');
            let form_station_status_elt = document.getElementById('station_status');
            let form_station_available_bikes_elt = document.getElementById('station_available_bikes');
            this.markers[i].addListener('click', function() {
                form_station_number_elt.innerHTML = number,
                form_station_name_elt.innerHTML = name,
                form_station_address_elt.innerHTML = address,
                form_station_position_elt.innerHTML = 'lat : ' + position.lat + ', lng : ' + position.lng,
                form_station_status_elt.innerHTML = status,
                form_station_available_bikes_elt.innerHTML = available_bikes
                
            });
           
    
        }
    }
    
}