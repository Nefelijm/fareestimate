//Inicializando el mapa y creando
function initMap(){
	let icon = 'assets/images/car.jpg';
	let markador , latitude, longitude;
	let lima = { lat: -12.1191427, lng: -77.0349046};
	let map = new google.maps.Map(document.getElementById('map'),
      { 
				zoom:18,
				center:lima
			})




let myUbication = function (position) {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	// Agregando marcador (la propiedad position define la posicion de marcador)
	 markador = new google.maps.Marker({		
		position: lima,
		map: map,
		icon: icon,
		animation: google.maps.Animation.DROP, // animar un marcador
		title: 'Usted esta aqui'
	});

	map.setZoom(18);// Acercamos al mapa
	map.setCenter(lima);// Asignamos un nuevo centro del mapa
};

// Si encontramos algun problema se activa la funcion error
let error = function (error) {
	window.alert('No se ha encontrado tu localizacion localización');
};


function search() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(myUbication, error);
	}
}



window.addEventListener('load', search);

};