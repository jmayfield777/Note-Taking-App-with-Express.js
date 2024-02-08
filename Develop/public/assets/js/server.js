// import dependencies
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const notes = require('../../../db/db.json');
const PORT = 3001;
const fs = require('fs');
const app = express();
const path = require('path');

// middleware
app.use(express.static('public'));
app.use(express.json());





// get route to index.html file
app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, '../../../public/index.html'));

});

// get route to notes.html file
app.get('/notes', (req, res) => {

  res.sendFile(path.join(__dirname, '../../../public/notes.html'));

});

// wildcare route
app.get('*', (req, res) => {

  res.sendFile(path.join(__dirname, '../../../public/index.html'));

})




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

// delete route to /api/notes/:id
app.delete('/api/notes/:id', (req, res) => {
  // log request to delete note
  console.info(`${req.method} request received to delete a note`);

  // read existing notes from db.json
  const notes = JSON.parse(fs.readFile('../../../db/db.json'));

  // find the index of the note with given id
  const noteIndex = notes.findIndex(note => note.id === req.params.id);

  // if the note is found remove from array
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);

    // write notes back to db.json
    fs.writeFile('../../../db/db.json', JSON.stringify(notes));

    res.json({ message: 'Note deleted successfully' });

  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});




// connect PORT
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});