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
  // parse json data
  res.json(notes);

  // Log our request to the terminal
  console.info(`${req.method} request received to get notes`);
});

// post route to /api/notes
app.post('/api/notes', (req, res) => {

// log that a POST request was received to the terminal
console.info(`${req.method} request received to add a note`);
  
// destructuring assignment for items in req.body
const { title , text } = req.body;

// if all required properties are present
if (title && text) {
// variable for the newNote object
const newNote =  {
  title,
  text,
  id: uuidv4()
};

// get existing notes
fs.readFile('../../../db/db.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    // convert string to json object
    const parsedNotes = JSON.parse(data);

    // add a new note
    parsedNotes.push(newNote);

    // write updated notes back to db.json
    fs.writeFile(
      '../../../db/db.json',
      JSON.stringify(parsedNotes, null, 4),
      (writeErr) => 
        writeErr
          ? console.error(writeErr)
          : console.info('Successfully updated notes!')
    );
  }
});

const response = {
  status: 'success',
  body: newNote,
};

  console.log(response);
  res.status(201).json(response);
} else {
  res.status(500).json('Error in posting note');
}
});


// connect PORT
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});