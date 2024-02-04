// import express.js
const express = require('express');

// set port
const PORT = 3001;

// assign instance of express to a variable
const app = express();

// route to index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});