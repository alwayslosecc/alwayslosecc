const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

// Store generated license keys in memory for this example
const licenseKeys = [];

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to generate a license key
app.get('/generate-key', (req, res) => {
    const newKey = uuidv4();
    licenseKeys.push(newKey);
    res.json({ key: newKey });
});

// Endpoint to get all generated license keys
app.get('/keys', (req, res) => {
    res.json({ keys: licenseKeys });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
