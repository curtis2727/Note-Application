const Note = require('../models/note.js'); 
exports.createNote = async (req, res) => {
    const { title, content } = req.body;
    try {
        const note = new Note({ userId: req.user.id, title, content });
        await note.save();
        res.status(201).send("Note created");
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user.id });
        res.status(200).json(notes);
    } catch (error) {
        res.status(400).send(error);
    }
};
