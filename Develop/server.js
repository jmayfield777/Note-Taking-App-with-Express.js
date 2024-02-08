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