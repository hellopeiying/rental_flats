const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();

app.use(express.static(__dirname)); // Serve files from the current directory

app.get('/data', (req, res) => {
    const markers = [];

    fs.createReadStream('rental_blocks_geocoded.csv')
        .pipe(csv())
        .on('data', (row) => {
            // Assuming latitude is in the "Latitude" column and longitude is in the "Longitude" column
            const lat = parseFloat(row.Latitude);
            const lng = parseFloat(row.Longitude);
            markers.push({ lat, lng });
        })
        .on('end', () => {
            res.json(markers); // Send JSON response
        })
        .on('error', (error) => {
            console.error('Error reading CSV:', error);
            res.status(500).send('Error reading CSV');
        });
});

const PORT = process.env.PORT || 3000; // Use port defined by environment variable or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
