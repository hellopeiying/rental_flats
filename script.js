let map;

function initMap() {
    const singapore = { lat: 1.3521, lng: 103.8198 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: singapore,
    });

    // Fetch data from server and plot markers
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            // Plot markers from JSON data
            data.forEach(markerData => {
                new google.maps.Marker({
                    position: markerData,
                    map: map,
                    title: 'Rental Block' // You can customize the marker title if needed
                });
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Load CSV data and plot markers
    loadCSVData('rental_blocks_geocoded.csv');
}

function loadCSVData(filename) {
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1); // Split CSV data by lines, skip header row
            rows.forEach(row => {
                const columns = row.split(',');
                const lat = parseFloat(columns[0]); // Assuming latitude is in the first column
                const lng = parseFloat(columns[1]); // Assuming longitude is in the second column

                // Create marker for each data point
                const marker = new google.maps.Marker({
                    position: { lat: lat, lng: lng },
                    map: map,
                    title: 'Rental Block' // You can customize the marker title if needed
                });
            });
        })
        .catch(error => {
            console.error('Error loading CSV:', error);
        });
}
