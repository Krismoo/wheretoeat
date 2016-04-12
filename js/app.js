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

    searchPlaces(map,here);

    return map;
}

function searchPlaces(map,here){
    var placesSearchOptions = {location: here, radius: 300, types: ['restaurant'], keyword: 'Pizza'};
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(placesSearchOptions, function(results,status){
        $.each(results,function(k,place){
            $("#restaurantTable").append("<tr class='restaurant'><td><img src="+place.icon+"  style=width:30px;height:30px;></td><td style=width:50px; class='number'>"+(k+1)+"</td><td>"+ place.name+"</td></tr>");
        });
    });
}
$(document).ready(function() {
	getPosition();
});