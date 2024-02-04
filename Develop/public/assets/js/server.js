// import express.js
const express = require('express');

// import uuid
const { v4: uuidv4 } = require('uuid');

// import db/db.json
const notes = require('../../../db/db.json');

// set port
const PORT = 3001;

// import fs
const fs = require('fs');

// assign instance of express to a variable
const app = express();

// get route to index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
});

// get route to notes.html file
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/notes.html'));
});

// get route to /api/notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});