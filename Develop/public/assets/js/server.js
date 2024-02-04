// import express.js
const express = require('express');

// import uuid
const { v4: uuidv4 } = require('uuid');

// set port
const PORT = 3001;

// import fs
const fs = require('fs');

// assign instance of express to a variable
const app = express();

// route to index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// route to note.html file
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});