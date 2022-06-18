// require Mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

// schema
const bookSchema = new Schema({
    title: String,
    Description: String,
    Year: Number,
    Quantity: Number,
    imageURL: String
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book