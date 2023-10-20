var map = L.map('map').setView([-25.8725478639459, 28.233319277912212], 13); //-25.8725478639459, 28.233319277912212
var marker = L.marker([-25.8725478639459, 28.233319277912212]).addTo(map);
var popup = L.popup()
    .setLatLng([-25.8725478639459, 28.233319277912212])
    .setContent("I am a standalone popup.")
    .openOn(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);