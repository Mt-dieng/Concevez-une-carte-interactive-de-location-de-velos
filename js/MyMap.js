//Déclaration de class map
class MyMap{
    
    // Déclaration de notre constructor
    constructor (mapElement, mapOptions) {
        this.mapElement = mapElement;
        this.mapOptions = mapOptions;   
        this.googleMap = null;
        this.markers = [];
    }

    //methode iniMat   
    initMap(){
        this.googleMap = new google.maps.Map(this.mapElement, this.mapOptions);
    }

    createMarkers(stations){
        for (let i=0; i<stations.length; i++){
            this.markers[i] = new google.maps.Marker({
                position: stations[i].coordonnees,
                map: this.googleMap,
                title: stations[i].nom
            })
        }
    }
    
}