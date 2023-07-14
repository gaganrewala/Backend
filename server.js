const express = require('express');
const app = express();
const port = 5000;

// Define a route to serve the JSON file
app.get('/api/data', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // Read the JSON file
    const jsonData = require('./data.json');
    res.json(jsonData);
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
