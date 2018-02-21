// Inicializando el mapa y creando
function initMap() {
  let markador, latitude, longitude;
  let lima = { lat: -12.1191427,
lng: -77.0349046};
  let map = new google.maps.Map(document.getElementById('map'),
    { 
      zoom: 18,
      center: lima
    });

  let myUbication = function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    // Agregando marcador (la propiedad position define la posicion de marcador)
	 markador = new google.maps.Marker({		
      position: lima,
      map: map,
    });

    map.setZoom(20);// Acercamos al mapa
    map.setCenter(lima);// Asignamos un nuevo centro del mapa
  };
  // Si encontramos algun problema se activa la funcion error
  let error = function(error) {
    window.alert('No se ha encontrado tu localizacion localización');
  };

  function search() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(myUbication, error);
    }
  }
  // llamando a los elementos del  DOM
  let start = document.getElementById('inputStart');
  let destination = document.getElementById('inputDestiny');
  // Autocompletando
  new google.maps.places.Autocomplete(start);
  new google.maps.places.Autocomplete(destination);
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;

  let calculateRoute = function(directionsService, directionsDisplay) {
    directionsService.route({
      origin: start.value,
      destination: destination.value,
      travelMode: 'DRIVING'}, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);	
				console.log(response.routes[0].legs[0]);
				console.log(response.routes[0].legs[0].distance.text);
				console.log(response.routes[0].legs[0].duration.text);

      } else {
        window.alert('No encontramos tu ruta');
      }		
    });
  };

  directionsDisplay.setMap(map);

  window.addEventListener('load', search);
  document.getElementById('rute').addEventListener('click', function() {
    calculateRoute(directionsService, directionsDisplay);
  });
};