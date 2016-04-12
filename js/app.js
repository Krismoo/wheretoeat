function getPosition() {
	var readPosition = function(position) {
		console.log(position);
		getMap(position);
	}
	
	return window.navigator.geolocation.getCurrentPosition(readPosition);
}

function getMap(position) {
	var lat = (position ? position.coords.latitude : 47.5);
	var lon = (position ? position.coords.longitude : 8.2);
	var here = new google.maps.LatLng(lat, lon);
	
	var mapOptions = { center: here, zoom: 15 };
	var map = new google.maps.Map(document.getElementById("where"), mapOptions);







    var placesSearchOptions = {location: here, radius: 300, types: ['restaurant'], keyword: 'Pizza'};

    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(placesSearchOptions, function(results,status){
       // ...
        $.each(results,function(k,v){
            $("#restaurantList").append("<li>"+v.name+"</li>");
        });
    });



    return map;
}

$(document).ready(function() {
	getPosition();
});