const mongoose = require("mongoose");


const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


const Note = mongoose.model('Notes', noteSchema);
module.exports = Note;