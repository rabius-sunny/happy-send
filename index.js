const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler')

const PORT = process.env.PORT || 3000

const app = express()
dotenv.config()

// database connection

// request parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set view engine
app.set('view engine', 'ejs')

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET))

// routings

// handle errors
app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})
