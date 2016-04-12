function getPosition() {
	var readPosition = function(position) {
		console.log(position);
	}
	
	return window.navigator.geolocation.getCurrentPosition(readPosition);
}

function getMap() {
	var here = new google.maps.LatLng(47.5, 8.2);
	//47.481876, 8.211481
	
	var mapOptions = { center: here, zoom: 15 };
	
	var map = new google.maps.Map(document.getElementById("where"), mapOptions);
	return map;
}

$(document).ready(function() {
	getPosition();
	
	getMap();
});