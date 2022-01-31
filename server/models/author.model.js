const mongoose = require("mongoose");
//Setup schema
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name must be present"
        ]
    }

},{timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;