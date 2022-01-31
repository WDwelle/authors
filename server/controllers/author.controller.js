const Author = require('../models/author.model')

//===CREATE===\\
module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => res.json({message: "success", Author: newlyCreatedAuthor}))
        .catch(err => res.status(400).json(err));
}

//===READ===\\
module.exports.findAllAuthors = (req, res) => {//Read all
    Author.find()
        .then(allDaAuthors => res.json({message: "success", Authors: allDaAuthors}))
        .catch(err => res.json({ message: "something went wrong", error: err}));
}

module.exports.findOneSingleAuthor = (req, res) => {//Read One
    Author.findOne({_id: req.params.id })
        .then(oneSingleAuthor => res.json({message: "success", Author : oneSingleAuthor}))
        .catch(err => res.json({ message: "something went wrong", error: err}));
}

//===UPDATE===\\
module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({message: "success", Author: updatedAuthor }))
        .catch(err => res.status(400).json(err));
}

//===DELETE===\\
module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({message: "success", result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}