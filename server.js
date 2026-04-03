const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// To store the name temporarily
let storeName = "";

// Middleware
app.use(express.static('public')); // serve static files from public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST request to save name
app.post('/index', (req, res) => {
    storeName = req.body.name;
    res.send('OK');
});

// GET request to return stored name
app.get('/greet', (req, res) => {
    res.json({ name: storeName });
});

// Test GET request
app.get('/api', (req, res) => {
    res.json({ message: "HELLO" });
});

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});