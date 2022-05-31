const express = require('express')
const ejs = require('ejs')
const todoController = require('./controllers/TodoController')

const app = express()

/** Setup Template engine */
app.set('view engine', 'ejs')

/** Load Static files */
app.use(express.static('./public'))

/** Fire controllers */
todoController(app)





/** Listen to Port */
app.listen(5000)