const Note = require("../models/notesModel");
const express = require("express");
const router = express.Router();


//api to create a new note
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.content) {
            return res.status(400).json({
                message: "Please enter all fields",
            });
        }
        const newNote = {
            title: req.body.title,
            content: req.body.content,
        };

        const note = await Note.create(newNote);
        return res.status(200).json(note);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

//api to show all notes 
router.get("/", async (req, res) => {
    try {
        const notes = await Note.find({});
        res.status(200).json({
            count: notes.length,
            data: notes,
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//api to show a specific note
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        res.status(200).json(note);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//api to update a specific note
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.title || !req.body.content) {
            return res.status(400).json({
                message: "Please enter all fields",
            });
        }
        const { id } = req.params;
        const updatedNote = await Note.findByIdAndUpdate(id, req.body);

        if (!updatedNote) {
            return res.status(400).json({ message: "Note doesnt exist" });
        }
        return res.status(200).json({ message: "Note Updated Successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//api to delete a specific note
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        return res.status(200).json({ message: "Note deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});





module.exports = router;