$(document).ready(function(){
		$('body').on('click', 'button', function(event) {
			event.preventDefault();
			alert("dfnhjztzver");

			return window.navigator.geolocation.getCurrentPosition(function(position) {
				console.log(position);

				//create Map
				var here = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				var mapOptions = {
					center: here,
					zoom: 15
				};
				var map = new google.maps.Map(document.getElementById("where"), mapOptions);

				//mark own location
				var iconUrl = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=|00FF00|ffffff';
				var markerOptions = {
					map: map,
					position: here,
					icon: iconUrl
				};
				new google.maps.Marker(markerOptions);

				//find Places
				var placesSearchOptions = {
					location: here,
					radius: 300,
					types: ['restaurant'],
					keyword: 'Pizza'
				};
				var service = new google.maps.places.PlacesService(map);
				service.nearbySearch(placesSearchOptions, function(results,status){
					$.each(results,function(k,place){
						$("#restaurantTable").append("<tr class='restaurant'><td><img src="+place.icon+"  style=width:30px;height:30px;></td><td style=width:50px; class='number'>"+(k+1)+"</td><td>"+ place.name+"</td></tr>");

						var iconUrl = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + (k+1) + '|FF0000|ffffff';
						var markerOptions = {
							map: map,
							position: place.geometry.location,
							icon: iconUrl
						};
						new google.maps.Marker(markerOptions);
					});
				});
			});
	});
});
