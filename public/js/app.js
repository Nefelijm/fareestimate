//Inicializando el mapa y creando
function initMap(){
	let lima = { lat: -12.1191427, lng: -77.0349046};
	let map = new google.maps.Map(document.getElementById('map'),
      { 
				zoom:18,
				center:lima
			})
}