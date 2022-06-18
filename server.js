// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// CONFIGURATIONS
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)
// app.use(corse())

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(cors())

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World')
  })

// Require the books controller before writing any routes
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

app.listen(process.env.PORT)