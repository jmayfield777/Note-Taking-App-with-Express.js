// import dependencies
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const notes = require('./Develop/db/db.json');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const app = express();
const path = require('path');
const { json } = require('body-parser');

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded( { extended: true }));


// get route to /api/notes
app.get('/api/notes', (req, res) => {
  
  fs.readFile('./Develop/db/db.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });

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
fs.readFile('./Develop/db/db.json', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    // convert string to json object
    const parsedNotes = JSON.parse(data);

    // add a new note
    parsedNotes.push(newNote);

    // write updated notes back to db.json
    fs.writeFile(
      './Develop/db/db.json',
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

// delete route to /api/notes/:id
app.delete('/api/notes/:id', (req, res) => {
  // log request to delete note
  console.info(`${req.method} request received to delete a note`);

  fs.readFile('./Develop/db/db.json', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // parse the data as a json object and remove the note with the given id
      let parsedNotes = JSON.parse(data);

      const noteIndex = parsedNotes.findIndex(parsedNotes => parsedNotes.id === req.params.id);

      if (noteIndex > -1) {
        parsedNotes.splice(noteIndex, 1);
      }

      fs.writeFile('./Develop/db/db.json',
        JSON.stringify(parsedNotes, null, 4),
        (writeErr) => 
          writeErr
            ? console.error(writeErr)
            : console.info('Successfully deleted note!')
        );
    }
  });

  res.json('Successfully deleted note!');

});


// get route to index.html file
app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));

});

// get route to notes.html file
app.get('/notes', (req, res) => {

  res.sendFile(path.join(__dirname, 'notes.html'));

});


// wildcare route
app.get('*', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));

});


// connect PORT
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});