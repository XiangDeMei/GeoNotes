
$(document).ready(function(){	
	var map = new L.Map('map');
	
	var cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/c827a0eab8d845a6b31a791809e49933/997/256/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
	    maxZoom: 18
	});
	var london = new L.LatLng(51.505, -0.09); // geographical point (longitude and latitude)
	var montreal = new L.LatLng(45.515, -73.58)
	
	map.setView(montreal, 14).addLayer(cloudmade);
	
});


