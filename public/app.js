// create map
// Create map:                                                       
const map = L.map('map', { center: [48.868672, 2.342130], zoom: 12, });

// Add OpenStreetMap tiles:
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiam92ZWwyMDAwIiwiYSI6ImNrd3U3cmJkdDFubTUybm84NmptNWVnZ3gifQ.stsv9b8VW5xq0EL3o2JmWw'
}).addTo(map);

// Create and add a geolocation marker:
const marker = L.marker([48.87007, 2.346453])
marker.addTo(map).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()

// draw the 2nd arrondissement
var latlngs = [                                       
    [48.863368120198004, 2.3509079846928516],
    [48.86933262048345, 2.3542531602919805],
    [48.87199261164275, 2.3400569901592183],
    [48.86993336274516, 2.3280142476578813],
    [48.86834104280146, 2.330308418109664],
];

var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);

// create red pin marker
//const redPin = L.icon ({
//    iconUrl: 'assets/red-pin.png',
   // iconSize: [38, 38],
//iconAnchor: [19, 38]
//})

// Metro station markers:
const rS = L.marker([48.866200610611926, 2.352236247419453]).bindPopup('Réaumur-Sébastopol')
const sSD = L.marker([48.869531786321566, 2.3528590208055196]).bindPopup('Strasbourg-Saint-Denis')
const sentier = L.marker([48.8673721067762, 2.347107922912739]).bindPopup('Sentier')
const bourse = L.marker([48.86868503971672, 2.3412285142058167]).bindPopup('Bourse')
const qS = L.marker([48.869560129483226, 2.3358638645569543]).bindPopup('Quatre Septembre')
const gB = L.marker([48.871282159004856, 2.3434818588892714]).bindPopup('Grands Boulevards')

const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(map)

// metro station markers



