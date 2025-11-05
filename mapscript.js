// Initialize the map
var map = L.map('map').setView([13.3318053, 74.7058913], 9);

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

// Load the JSON file
fetch('markers.json')
    .then(response => response.json())
    .then(data => {
        // Update the markers based on the current slider values
        function updateMarkers() {
            // Read the values of the filter inputs
            var nitrogen = document.getElementById('nitrogen').value;
            var phosphorous = document.getElementById('phosphorous').value;
            var pottasium = document.getElementById('pottasium').value;
            var sulphur = document.getElementById('sulphur').value;
            var zinc = document.getElementById('zinc').value;
            var iron = document.getElementById('iron').value;
            var copper = document.getElementById('copper').value;
            var boron = document.getElementById('boron').value;
            var manganese = document.getElementById('manganese').value;
            var pH = document.getElementById('ph').value;
            var elecCond = document.getElementById('elecCond').value;
            var oc = document.getElementById('oc').value;

            // Remove existing markers from the map
            map.eachLayer(layer => {
                if (layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });

            // Loop through the data and add filtered markers based on condition
            data.features.forEach(marker => {
                // Filter markers based on condition
                if (
                    marker.properties["N(kg/h)"] >= nitrogen &&
                    marker.properties["P(kg/h)"] >= phosphorous &&
                    marker.properties["K(kg/h)"] >= pottasium &&
                    marker.properties["S(ppm)"] >= sulphur &&
                    marker.properties["Zn(ppm)"] >= zinc &&
                    marker.properties["Fe(ppm)"] >= iron &&
                    marker.properties["Cu(ppm)"] >= copper &&
                    marker.properties["B(ppm)"] >= boron &&
                    marker.properties["Mn(ppm)"] >= manganese &&
                    marker.properties["PH"] >= pH &&
                    marker.properties["EC(dS/m)"] >= elecCond &&
                    marker.properties["OC(%)"] >= oc
                ) {
                    // Create the marker and add it to the map
                    // Code for dialog
                    let html = ""
                    Object.keys(marker.properties).forEach((key) => {
                        html += ` <tr>   <td>${key} </td> <td> : ${marker.properties[key]} </td>  <tr>`
                    })
                    html = "<table>" + html + "</table"
                    L.marker([marker.geometry.coordinates[1], marker.geometry.coordinates[0]]).addTo(map)
                        .bindPopup(html);
                }
            });
        }

        // Call updateMarkers initially and whenever a slider changes
        updateMarkers();
        document.getElementById('nitrogen').addEventListener('input', updateMarkers);
        document.getElementById('phosphorous').addEventListener('input', updateMarkers);
        document.getElementById('pottasium').addEventListener('input', updateMarkers);
        document.getElementById('sulphur').addEventListener('input', updateMarkers);
        document.getElementById('zinc').addEventListener('input', updateMarkers);
        document.getElementById('iron').addEventListener('input', updateMarkers);
        document.getElementById('copper').addEventListener('input', updateMarkers);
        document.getElementById('boron').addEventListener('input', updateMarkers);
        document.getElementById('manganese').addEventListener('input', updateMarkers);
        document.getElementById('ph').addEventListener('input', updateMarkers);
        document.getElementById('elecCond').addEventListener('input', updateMarkers);
        document.getElementById('oc').addEventListener('input', updateMarkers);
    });
