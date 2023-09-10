// Load env variable

if(process.env.NODE_ENV!="production"){
  require("dotenv").config();
}


// dependencies

const express =require('express');
const cors=require('cors');
const connectToDb=require("./config/connectToDb");
const notesControllers=require('./controllers/notesControllers')


// create express app
const app=express();


// config the exp

app.use(express.json());
app.use(cors());


// connect to db

connectToDb();


// Routing


app.get('/notes',notesControllers.fetchNotes );
app.get('/notes/:id', notesControllers.fetchNote)
app.post('/notes', notesControllers.createNote)
app.put("/notes/:id", notesControllers.updateNote);
app.delete("/notes/:id",notesControllers.deleteNote )


// start server

app.listen(process.env.PORT);