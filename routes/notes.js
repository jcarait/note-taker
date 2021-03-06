const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile, writeToFile, readAndDelete } = require("../helpers/fsUtils")

// GET Route for retrieving all the notes

notes.get("/", (req, res) =>
  readFromFile("./db/notes.json").then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
notes.post("/", (req, res) => {
    //Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // If all the required properties are present
    if (title, text) {

        const newNote = {
            title,
            text,
            id: uuidv4()
        };

        readAndAppend(newNote, "./db/notes.json");

        const response = {
            status: "success",
            body: newNote
        };
    
        res.json(response);
    } else {
        res.json("Error in posting note");
    }
});

// DELETE route for deleting a note
notes.delete("/:id", (req, res) => {

    const id = req.params.id;
    res.send(id)
    readAndDelete(id, "./db/notes.json")


});

module.exports = notes;