// import dependencies
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = process.env.PORT || 3001;
const notes = require('../db/db.json');