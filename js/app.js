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
	return map;
}

$(document).ready(function() {
	getPosition();
});