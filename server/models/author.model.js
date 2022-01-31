const mongoose = require("mongoose");
//Setup schema
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be present"],
        minLength: [3, "Name must be at least 3 charachters"]
    }

},{timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;