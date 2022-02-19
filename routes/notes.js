const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils")

// GET Route for retrieving all the notes

notes.get("/", (req, res) =>
  readFromFile("./db/notes.json").then((data) => res.json(JSON.parse))
);

// POST Route for submitting feedback
notes.post("/", (req, res) => {
    //Destructuring assignment for the items in req.body
    const { noteTitle, noteContent } = req.body;

    // If all the required properties are present
    if (noteTitle, noteContent) {

        const newNote = {
            noteTitle,
            noteContent,
            note_id: uuidv4()
        };

        readAndAppend(newNote, "./db/feedback.json");

        const response = {
            status: "success",
            body: newNote
        };
    
        res.json(response);
    } else {
        res.json("Error in posting feedback");
    }
});

module.exports = notes;