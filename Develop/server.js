// import depedencies
const express = require('express');

// create instance of express and assign it to variable
const app = express();

// PORT
const PORT = process.env.PORT || 3001;

// middleware for body parsing
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

// import html and api routes
const apiRoutes = require('./routes/apiRoutes.js');
app.use(apiRoutes);
const htmlRoutes = require('./routes/htmlRoutes.js');
app.use(htmlRoutes);

// listen to port
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});