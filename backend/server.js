const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');


const app = express();
dotenv.config();

//API ENDPOINT CREATION
//API ENDPOINT IS THE ROUTE WHERE THE DATA FROM BACKEND: DATABASE, ETC
//IS SERVED THROUGH THE FRONTEND.

app.get("/", (req, res) => {
    res.send('API is running');
})

//to access this on the browser, type: localhost:5000/api/notes
app.get("/api/notes", (req, res) => {
    res.json(notes);
})

//to render only one of the objects in notes.js
app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n) => n._id === req.params.id)
    res.send(note);
})
//then type on the browser..../api/notes/(any of the ids)


//.env file contains all the secret information about our application
//to use this file, you must install "dotenv" and create ".env" file
//in the root folder.

PORT = process.env.PORT || 5000; //assign a d/f port if the default isn't working

app.listen(PORT, console.log(`started on port ${PORT}`));

//we need to restart our server each time make changes to the app.
//to stop this, we need to install a package called nodemon.
//then, in "start" oblect in package.json , change node to nodemon                                                                                       